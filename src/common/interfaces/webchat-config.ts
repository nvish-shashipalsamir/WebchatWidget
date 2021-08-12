export interface IPersistentMenuItem {
  title: string;
  payload: string;
}

export interface IWebchatSettings {
  agentAvatarUrl: string;
  backgroundImageUrl: string;
  colorScheme: string;
  designTemplate: number;
  disableBranding: boolean;
  disableHtmlInput: boolean;
  disableInputAutofocus: boolean;
  disableLocalStorage: boolean;
  disablePersistentHistory: boolean;
  disableUrlButtonSanitization: boolean;
  disableHtmlContentSanitization: boolean;
  disableTextInputSanitization: boolean;
  disableToggleButton: boolean;
  dynamicImageAspectRatio: boolean;
  enableConnectionStatusIndicator: boolean;
  showEngagementMessagesInChat: boolean;
  enableAutoFocus: boolean;
  enableInjectionWithoutEmptyHistory: boolean;
  enableFileUpload: boolean;
  enableGenericHTMLStyling: boolean;
  enableFocusTrap: boolean;
  enablePersistentMenu: boolean;
  enableRating: "always" | "once" | "onRequest";
  enableSTT: boolean;
  enableStrictMessengerSync: boolean;
  enableTTS: boolean;
  enableTypingIndicator: boolean;
  enableUnreadMessageBadge: boolean;
  enableUnreadMessagePreview: boolean;
  enableUnreadMessageSound: boolean;
  enableUnreadMessageTitleIndicator: boolean;
  engagementMessageDelay: number;
  engagementMessageText: string;
  focusInputAfterPostback: boolean;
  getStartedButtonText: string;
  getStartedPayload: string;
  getStartedText: string;
  headerLogoUrl: string;
  ignoreLineBreaks: boolean;
  inputPlaceholder: string;
  messageDelay: number;
  /** TODO: this is the botAvatarUrl (rename for major) */
  messageLogoUrl: string;
  persistentMenu: {
    title: string;
    menuItems: IPersistentMenuItem[];
  };
  ratingTitleText: string;
  ratingCommentText: string;
  ratingMessageHistoryRatingText: string;
  ratingMessageHistoryCommentText: string;
  startBehavior: "none" | "button" | "injection";
  STTLanguage: string;
  title: string;
  unreadMessageTitleText: string;
  unreadMessageTitleTextPlural: string;
  userAvatarUrl: string;
  useSessionStorage: boolean;
}

export interface IWebchatConfig {
  active: boolean;
  URLToken: string;
  settings: IWebchatSettings;
}
