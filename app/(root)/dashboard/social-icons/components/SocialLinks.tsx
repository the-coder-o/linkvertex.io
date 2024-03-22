import { FC } from "react";

import SocialLinkInput from "./SocialLinkInput";
import { SocialLinksProps } from "@/interfaces/dashboard/profile.interface";

import { useTranslation } from "react-i18next";
import { validateAppleMusic, validateAppStore, validateEmail, validateFacebook, validateGithub, validateGooglePlay, validateInstagram, validateLinkedin, validateMastodon, validatePinterest, validateSnapchat, validateSpotify, validateTelegram, validateTiktok, validateTwitch, validateTwitter, validateWhatsApp, validateYoutube } from "@/app/(root)/dashboard/social-icons/lib/validation-inputs";

const SocialLinks: FC<SocialLinksProps> = ({ input, handleChange, isValid }) => {
  const { t } = useTranslation("errors_profile");

  return (
    <>
      <SocialLinkInput iconClass="fa-brands fa-instagram" label="Instagram" value={input.instagram} placeholder="username" onChange={handleChange("instagram", validateInstagram)} isValid={isValid.instagram} validationMessage={t("error1")} />
      <SocialLinkInput iconClass="fa-brands fa-twitter" label="Twitter" value={input.twitter} placeholder="username" onChange={handleChange("twitter", validateTwitter)} isValid={isValid.twitter} validationMessage={t("error2")} />
      <SocialLinkInput iconClass="fa-brands fa-mastodon" label="Mastodon" value={input.mastodon} placeholder="@username@domain" onChange={handleChange("mastodon", validateMastodon)} isValid={isValid.mastodon} validationMessage={t("error3")} />
      <SocialLinkInput iconClass="fa-brands fa-youtube" label="YouTube" value={input.youtube} placeholder="https://www.youtube.com/channel/channel_id" onChange={handleChange("youtube", validateYoutube)} isValid={isValid.youtube} validationMessage={t("error4")} />
      <SocialLinkInput iconClass="fa-brands fa-tiktok" label="TikTok" value={input.tiktok} placeholder="@username" onChange={handleChange("tiktok", validateTiktok)} isValid={isValid.tiktok} validationMessage={t("error5")} />
      <SocialLinkInput iconClass="fa-brands fa-twitch" label="Twitch" value={input.twitch} placeholder="https://www.twitch.tv/username" onChange={handleChange("twitch", validateTwitch)} isValid={isValid.twitch} validationMessage={t("error6")} />
      <SocialLinkInput iconClass="fa-brands fa-linkedin" label="Linkedin" value={input.linkedin} placeholder="https://www.linkedin.com/in/username" onChange={handleChange("linkedin", validateLinkedin)} isValid={isValid.linkedin} validationMessage={t("error7")} />
      <SocialLinkInput iconClass="fa-brands fa-whatsapp" label="WhatsApp" value={input.whatsapp} placeholder="+62-812-3456-7890" onChange={handleChange("whatsapp", validateWhatsApp)} isValid={isValid.whatsapp} validationMessage={t("error8")} />
      <SocialLinkInput iconClass="fa-brands fa-telegram" label="Telegram" value={input.telegram} placeholder="@username" onChange={handleChange("telegram", validateTelegram)} isValid={isValid.telegram} validationMessage={t("error9")} />
      <SocialLinkInput iconClass="fa-regular fa-envelope" label="E-mail" value={input.email} placeholder="youremail@address.com" onChange={handleChange("email", validateEmail)} isValid={isValid.email} validationMessage={t("error10")} />
      <SocialLinkInput iconClass="fa-brands fa-pinterest" label="Pinterest" value={input.pinterest} placeholder="username" onChange={handleChange("pinterest", validatePinterest)} isValid={isValid.pinterest} validationMessage={t("error11")} />
      <SocialLinkInput iconClass="fa-brands fa-spotify" label="Spotify" value={input.spotify} placeholder="https://open.spotify.com/user/username" onChange={handleChange("spotify", validateSpotify)} isValid={isValid.spotify} validationMessage={t("error12")} />
      <SocialLinkInput iconClass="fa-brands fa-apple" label="Apple Music" value={input.appleMusic} placeholder="https://apple.music.com/username" onChange={handleChange("appleMusic", validateAppleMusic)} isValid={isValid.appleMusic} validationMessage={t("error13")} />
      <SocialLinkInput iconClass="fa-brands fa-snapchat-ghost" label="Snapchat" value={input.snapchat} placeholder="https://www.snapchat.com/add/username" onChange={handleChange("snapchat", validateSnapchat)} isValid={isValid.snapchat} validationMessage={t("error14")} />
      <SocialLinkInput iconClass="fa-brands fa-app-store-ios" label="App Store" value={input.appStore} placeholder="https://apps.apple.com/app/id" onChange={handleChange("appStore", validateAppStore)} isValid={isValid.appStore} validationMessage={t("error15")} />
      <SocialLinkInput iconClass="fa-brands fa-google-play" label="Google Play" value={input.googlePlay} placeholder="https://play.google.com/store/apps/details?id=your_app_id" onChange={handleChange("googlePlay", validateGooglePlay)} isValid={isValid.googlePlay} validationMessage={t("error16")} />
      <SocialLinkInput iconClass="fa-brands fa-facebook" label="Facebook" value={input.facebook} placeholder="https://facebook.com/your_page_url" onChange={handleChange("facebook", validateFacebook)} isValid={isValid.facebook} validationMessage={t("error17")} />
      <SocialLinkInput iconClass="fa-brands fa-github" label="Github" value={input.github} placeholder="username" onChange={handleChange("github", validateGithub)} isValid={isValid.github} validationMessage={t("error18")} />
    </>
  );
};

export default SocialLinks;
