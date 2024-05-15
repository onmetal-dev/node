// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metal from '@onmetal/node';
import { Response } from 'node-fetch';

const metal = new Metal({
  metalAPIKey: 'My Metal API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource hetznerProjects', () => {
  test('create: only required params', async () => {
    const responsePromise = metal.hetznerProjects.create('3OHY5rQEfrc1vOpFrJ9q3r', {
      creatorId: 'string',
      hetznerApiToken: 'string',
      hetznerName: 'string',
      teamId: 'string',
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
    const response = await metal.hetznerProjects.create('3OHY5rQEfrc1vOpFrJ9q3r', {
      creatorId: 'string',
      hetznerApiToken: 'string',
      hetznerName: 'string',
      teamId: 'string',
      id: 'string',
      hetznerWebservicePassword: 'string',
      hetznerWebserviceUsername: 'string',
      privateSshKeyData: 'string',
      publicSshKeyData: 'string',
      sshKeyName: 'string',
    });
  });

  test('retrieve', async () => {
    const responsePromise = metal.hetznerProjects.retrieve('3OHY5rQEfrc1vOpFrJ9q3r');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metal.hetznerProjects.retrieve('3OHY5rQEfrc1vOpFrJ9q3r', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Metal.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = metal.hetznerProjects.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(metal.hetznerProjects.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Metal.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = metal.hetznerProjects.delete('3OHY5rQEfrc1vOpFrJ9q3r');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      metal.hetznerProjects.delete('3OHY5rQEfrc1vOpFrJ9q3r', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Metal.NotFoundError);
  });
});
