import {by, device, expect, element} from 'detox';

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

beforeAll(async () => {
  await device.launchApp({newInstance: true});
});

beforeEach(async () => {
  await device.reloadReactNative();

  await navigateToEditProfile();
});

describe('유저가 Age input을 눌렀을 경우', () => {
  it('값을 입력할 수 있다', async () => {
    const ageInput = element(by.id('AgeInput'));
    await ageInput.replaceText('123');
    await ageInput.tap();

    await expect(ageInput).toHaveValue('123');
  });
});

describe('유저가 유효하지 않은 값을 입력했을 경우', () => {
  it('에러 메세지가 보여질 수 있다', async () => {
    const ageInput = element(by.id('AgeInput'));
    await ageInput.replaceText('aef');
    await ageInput.tap();

    const editProfileButton = element(by.id('EditProfileButton'));

    await expect(editProfileButton).not.toBeFocused();
  });

  it('버튼을 누를 수 없다', async () => {
    const ageInput = element(by.id('AgeInput'));
    await ageInput.replaceText('aef');
    await ageInput.tap();

    const editProfileButton = element(by.id('EditProfileButton'));
    await editProfileButton.tap();

    await expect(editProfileButton).not.toBeFocused();
  });
});

describe('유저가 수정 버튼을 눌렀을 경우', () => {
  describe('수정에 성공한 경우', () => {
    const ageInput = element(by.id('AgeInput'));
    const editProfileButton = element(by.id('EditProfileButton'));

    it('수정 성공 얼럿이 떠야 한다', async () => {
      await ageInput.replaceText('1234');
      await editProfileButton.tap();

      const successAlert = element(by.text('Profile edited'));
      await expect(successAlert).toBeVisible();
    });

    it('확인 버튼을 누르면 Setting으로 이동할 수 있다', async () => {
      await ageInput.replaceText('1234');
      await editProfileButton.tap();

      const successAlertButton = element(by.text('OK'));
      await successAlertButton.tap();

      const SettingPage = element(by.id('SettingPage'));
      await expect(SettingPage).toBeVisible();
    });
  });

  describe('수정에 실패한 경우', () => {
    const ageInput = element(by.id('AgeInput'));
    const editProfileButton = element(by.id('EditProfileButton'));

    it('수정 실패 얼럿이 떠야 한다', async () => {
      await ageInput.replaceText('12');
      await editProfileButton.tap();

      const errorAlert = element(by.text('Error'));
      await expect(errorAlert).toBeVisible();
    });

    it('확인 버튼을 누르면 Alert을 숨길 수 있다', async () => {
      await ageInput.replaceText('12');
      await editProfileButton.tap();

      const errorAlertButton = element(by.text('OK'));
      await errorAlertButton.tap();

      await expect(errorAlertButton).not.toBeVisible();
    });
  });
});
