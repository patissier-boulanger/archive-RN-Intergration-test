import {by, device, expect, element} from 'detox';
import {FIXTURE} from '../src/common/constants';

describe('로그인 플로우', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const idInput = element(by.id('Id'));
  const passwordInput = element(by.id('Password'));
  const loginButton = element(by.id('LoginButton'));

  it('유저는 로그인에 성공한 경우 Home으로 이동한다', async () => {
    const Home = element(by.id('Home'));

    await idInput.replaceText(FIXTURE.VALID_USER.ID);
    await passwordInput.replaceText(FIXTURE.VALID_USER.PASSWORD);
    await loginButton.tap();
    await expect(Home).toBeVisible();
  });

  it('유저는 로그인에 실패할 경우 Alert이 보여진다', async () => {
    const alertText = element(by.text('로그인에 실패하였습니다'));
    const alertOkButton = element(by.text('확인'));

    await idInput.replaceText(FIXTURE.INVALID_USER.ID);
    await passwordInput.replaceText(FIXTURE.INVALID_USER.PASSWORD);
    await loginButton.tap();
    await expect(alertText).toBeVisible();
    await alertOkButton.tap();
  });
});
