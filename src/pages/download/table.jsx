import React from 'react'
import { useWindowSize } from "@docusaurus/theme-common";
import ReleaseCardPC from './release-card/pc/index'
import ReleaseCardMobile from './release-card/mobile/index'

export default function (props) {
  const windowSize = useWindowSize();
  const isMobile = windowSize === "mobile";
  const tableData = props.dataSource || []
  const latest = props.latest || false

  const dynURL = 'https://www.apache.org/dyn/closer.lua/streampark/';
  const archiveIncubatorURL = 'https://archive.apache.org/dist/incubator/streampark/';
  const archiveTLPURL = 'https://archive.apache.org/dist/streampark/';
  const downloadIncubatorURL = 'https://downloads.apache.org/incubator/streampark/'
  const downloadTLPURL = 'https://downloads.apache.org/streampark/'
  const releaseNoteUrl = 'https://streampark.apache.org/download/release-note/'

  function getSourceLink(version, tlp) {
    const prefix = latest ? dynURL : (tlp ? archiveTLPURL: archiveIncubatorURL);
    return prefix
        .concat(version)
        .concat('/apache-streampark-')
        .concat(version)
        .concat(tlp ? '-src.tar.gz.asc' : '-incubating-src.tar.gz')
        .concat('?action=download')
  }

  function getBinaryLink(scala, tlp, version) {
    const prefix = latest ? dynURL : (tlp ? archiveTLPURL: archiveIncubatorURL);
    return prefix
        .concat(version)
        .concat('/apache-streampark_')
        .concat(scala)
        .concat('-')
        .concat(version)
        .concat(tlp ? '-bin.tar.gz' : '-incubating-bin.tar.gz')
        .concat('?action=download')
  }

  function getSourceSigs(version, tlp, suffix) {
    const prefix = latest ? (tlp ? downloadTLPURL: downloadIncubatorURL) : (tlp ? archiveTLPURL: archiveIncubatorURL);
    return prefix.concat(version)
        .concat('/apache-streampark-')
        .concat(version)
        .concat(tlp ? '-src.tar.gz' : '-incubating-src.tar.gz')
        .concat(suffix)
  }

  function getBinarySigs(scala, tlp, version, suffix) {
    const prefix = latest ? (tlp ? downloadTLPURL: downloadIncubatorURL) : (tlp ? archiveTLPURL: archiveIncubatorURL);
    return prefix
        .concat(version)
        .concat('/apache-streampark_')
        .concat(scala)
        .concat('-')
        .concat(version)
        .concat(tlp ? '-bin.tar.gz' : '-incubating-bin.tar.gz')
        .concat(suffix)
  }

  const releaseData = tableData.map((release) => {
    return genRelease(release, latest)
  })
  function genRelease({ version, date, tlp }, latest) {
    return {
      latest: latest,
      version: version,
      date: date,
      releaseNotesUrl: `${releaseNoteUrl}${version}`,
      source: {
        url: getSourceLink(version, tlp),
        signature: getSourceSigs(version, tlp, '.asc'),
        sha512: getSourceSigs(version, tlp,'.sha512')
      },
      binary: [{
        name: 'apache-streampark_2.12-' + version + '-bin.tar.gz',
        url: getBinaryLink('2.12', tlp, version),
        signature: getBinarySigs('2.12', tlp, version, '.asc'),
        sha512: getBinarySigs('2.12', tlp, version, '.sha512')
      }, {
        name: 'apache-streampark_2.11-' + version + '-bin.tar.gz',
        url: getBinaryLink('2.11', tlp, version),
        signature: getBinarySigs('2.11', tlp, version, '.asc'),
        sha512: getBinarySigs('2.11', tlp, version, '.sha512')
      }]
    }
  }

  return isMobile ? (<ReleaseCardMobile data={releaseData} />) : (<ReleaseCardPC data={releaseData} />)
}
