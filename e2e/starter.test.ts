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

    await expect(element(by.id('BUTTON'))).toBeVisible();
    await element(by.id('BUTTON')).tap();
    await expect(element(by.text('OK'))).toBeVisible();
  });
});
