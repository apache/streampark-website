---
id: 'security'
title: 'Security'
sidebar_position: 4
---

# Frequently Asked Questions

## During a security analysis of StreamPark, I noticed that StreamPark allows for remote code execution, is this an issue?

Apache StreamPark is a stream processing development management framework that allows users to submit Flink/Spark jobs to remote clusters. which will be executed unconditionally, without any attempts to limit what code can run.

Historically, we have received many reports of remote code execution vulnerabilities that we have had to reject because this is by design.

We strongly discourage users from exposing Flink/Spark processes to the public Internet. In corporate networks or "cloud" accounts, we recommend appropriately restricting access to Flink and Spark clusters


# I found a vulnerability in StreamPark, how do I report it? #

If you have any concerns regarding StreamPark's security, or you discover a vulnerability or potential threat, please do not hesitate to get in touch with the Apache Security Team by dropping an email at private@streampark.apache.org.

Please specify the project name as "StreamPark" in the email, and provide a description of the relevant problem or potential threat. You are also urged to recommend how to reproduce and replicate the issue.

The Apache Security Team and the StreamPark community will get back to you after assessing and analyzing the findings.

Please note that the security issue should be reported on the security email first, before disclosing it on any public domain.
