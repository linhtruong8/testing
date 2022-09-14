#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkAuroraServerlessStack } from '../enhanced-leaderboard-view-backend/testing/lib/cdk-aurora-serverless-stack';

const app = new cdk.App();
new CdkAuroraServerlessStack(app, 'CdkAuroraServerlessStack');