import {by, device, expect, element} from 'detox';

describe('로그인 플로우', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('로그인에 성공한 경우 정상적으로 페이지에 접근할 수 있다.', async () => {
    const idInput = element(by.id('Id'));
    const passwordInput = element(by.id('Password'));
    const loginButton = element(by.id('LoginButton'));
    const welcomeText = element(by.text('WELCOME!'));

    await idInput.replaceText('Mike');
    await passwordInput.replaceText('12345');
    await loginButton.tap();
    await expect(welcomeText).toBeVisible();
  });

  it('로그인에 실패한 경우 실패 알림을 볼 수 있다', async () => {
    const idInput = element(by.id('Id'));
    const passwordInput = element(by.id('Password'));
    const loginButton = element(by.id('LoginButton'));
    const welcomeText = element(by.text('WELCOME!'));
    const alertText = element(by.text('로그인에 실패하였습니다'));

    const alertOkButton = element(by.text('확인'));

    await idInput.replaceText('Mike');
    await passwordInput.replaceText('123');
    await loginButton.tap();
    await expect(alertText).toBeVisible();
    await alertOkButton.tap();
    await expect(welcomeText).not.toBeVisible();

    await idInput.replaceText('');
    await passwordInput.replaceText('');
  });
});
