import {by, device, expect, element} from 'detox';

const login = async () => {
  const idInput = element(by.id('Id'));
  const passwordInput = element(by.id('Password'));
  const loginButton = element(by.id('LoginButton'));

  await idInput.replaceText('Mike');
  await passwordInput.replaceText('12345');
  await loginButton.tap();
};

const navigateToEditProfile = async () => {
  const settingTabButton = element(by.id('SettingTab'));
  await settingTabButton.tap();

  const settingPage = element(by.id('SettingPage'));
  await expect(settingPage).toBeVisible();

  const NavigateToEditProfileButton = element(by.id('NavigateToEditProfile'));
  await NavigateToEditProfileButton.tap();

  const editProfilePage = element(by.id('EditProfilePage'));
  await expect(editProfilePage).toBeVisible();
};

describe('세팅 페이지', () => {
  beforeAll(async () => {
    await device.launchApp({newInstance: true});
  });

  beforeEach(async () => {
    await device.reloadReactNative();

    await login();
  });

  it('정상적으로 EditProfile 페이지에 접근할 수 있다.', async () => {
    await navigateToEditProfile();
  });

  it('유저는 나이를 수정할 수 있다', async () => {
    await navigateToEditProfile();

    const ageInput = element(by.id('AgeInput'));
    await ageInput.replaceText('1234');

    const editProfileButton = element(by.id('EditProfileButton'));
    await editProfileButton.tap();
    const profileEditedText = element(by.text('Profile edited'));

    await expect(profileEditedText).toBeVisible();

    const alertOkButton = element(by.text('OK'));
    await alertOkButton.tap();
  });
});
