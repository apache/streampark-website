---
id: 'security'
title: 'Security'
sidebar_position: 4
---

# Supported Security Model

Apache StreamPark is a stream processing development and management framework intended for trusted, operator-controlled environments. Before deploying StreamPark, review the documentation and understand the privileges required to manage applications and submit Flink/Spark jobs.

## Released versions and development branches

Security reports affecting development branches or versions that have not been officially released may be accepted and addressed. However, an issue affecting only unreleased code will not receive a new CVE. CVEs apply only to officially released versions. If the same issue also affects an official release, that released version remains eligible for CVE assessment.

## Cross-team member functionality

The Cross-team member functionality provides logical groupings of teams and members according to its original design requirements. It is not a strict authorization or tenant-isolation mechanism. Reports claiming unauthorized cross-team access solely because these logical groupings do not enforce such isolation are therefore outside the accepted security-report scope.

This limitation applies specifically to the Cross-team member functionality; it does not exclude reports demonstrating a bypass of authentication or other supported security controls.

## Job execution and trust boundaries

Authorized job submission permits user-provided code to run with the privileges of the relevant execution process. Such code may access files, initiate network connections, or start processes. StreamPark does not sandbox Flink/Spark workloads. These capabilities alone, when exercised through authorized job execution, are expected behavior and are not security vulnerabilities.

Reports must identify a violation of a supported security boundary. Expected actions by an administrator or an authorized job submitter do not alone establish a vulnerability. Reports demonstrating unauthorized access to those capabilities remain eligible for assessment.

## Deployment responsibilities

Operators should:

- Restrict access to StreamPark and cluster management endpoints through private networks, VPNs, firewalls, or equivalent controls; avoid direct public Internet exposure.
- Enable appropriate authentication and protect credentials, tokens, and cluster configuration.
- Protect management traffic with TLS where appropriate.
- Use separate clusters or deployment environments when workloads require strong isolation between mutually untrusted users.

Public exposure, missing deployment controls, or actions already permitted by an authorized user's privileges do not, by themselves, establish a StreamPark vulnerability. Reports involving these conditions should explain which supported security control is bypassed.

# Frequently Asked Questions

## During a security analysis of StreamPark, I noticed that StreamPark allows for remote code execution, is this an issue?

Apache StreamPark is a stream processing development and management framework that allows authorized users to submit Flink/Spark jobs to remote clusters. These jobs execute user-provided code without workload sandboxing, as described in the supported security model above.

Historically, we have received many reports of remote code execution vulnerabilities that we have had to reject because this is by design.

We strongly discourage users from exposing Flink/Spark processes to the public Internet. In corporate networks or cloud accounts, we recommend appropriately restricting access to Flink and Spark clusters.


# I found a vulnerability in StreamPark, how do I report it? #

If you have any concerns regarding StreamPark's security, or you discover a vulnerability or potential threat, please do not hesitate to get in touch with the Apache Security Team by dropping an email at security@apache.org.

Please specify the project name as "StreamPark" in the email, and provide a description of the relevant problem or potential threat. You are also urged to recommend how to reproduce and replicate the issue.

The Apache Security Team and the StreamPark community will get back to you after assessing and analyzing the findings.

Please note that the security issue should be reported on the security email first, before disclosing it on any public domain. For more information see https://apache.org/security
