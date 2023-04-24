import {by, device, expect, element} from 'detox';

describe('기본 테스트', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('기본 테스트 with MSW', async () => {
    console.log('기본 테스트');

    // const response = await fetch('http://127.0.0.1:8081/test');
    // console.log(response.status, 'response');

    await expect(element(by.id('BUTTON'))).toBeVisible();
    await element(by.id('BUTTON')).tap();
    await expect(element(by.text('PRESSED'))).toBeVisible();
  });
});
