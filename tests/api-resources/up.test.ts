// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metal from '@onmetal/node';
import { Response } from 'node-fetch';

const metal = new Metal({
  metalAPIKey: 'My Metal API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource up', () => {
  test('create: only required params', async () => {
    const responsePromise = metal.up.create({
      appName: 'my-app',
      archive: {},
      envName: 'development',
      teamId: '3OHY5rQEfrc1vOpFrJ9q3r',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await metal.up.create({
      appName: 'my-app',
      archive: {},
      envName: 'development',
      teamId: '3OHY5rQEfrc1vOpFrJ9q3r',
    });
  });
});
