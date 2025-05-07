/*
InfCloud - the open source CalDAV/CardDAV Web Client
Configured for Radicale server (https://dav.belor.top/)
*/

// ===== SERVER CONFIGURATION ===== //
var globalNetworkCheckSettings = {
    // Radicale server URL (username will be appended from login screen)
    href: 'https://dav.belor.top/',

    // Connection settings
    timeOut: 90000,          // Request timeout (ms)
    lockTimeOut: 10000,      // Resource lock timeout (ms)
    checkContentType: true,  // Verify server content types
    
    // Account settings
    settingsAccount: true,   // Store user settings on server
    delegation: true,        // Allow shared calendars/contacts
    
    // Additional options
    additionalResources: [], // Shared resources accessible by all users
    hrefLabel: null,         // Server name display (null = automatic)
    forceReadOnly: null,     // Force read-only collections (null = auto-detect)
    ignoreAlarms: false,     // Disable alarms for specific calendars
    backgroundCalendars: []  // Calendars used for background highlighting
};

// ===== GLOBAL SETTINGS ===== //
var globalBackgroundSync = true;           // Sync when tab is inactive
var globalSyncResourcesInterval = 120000;  // Sync interval (2 minutes)
var globalEnableRefresh = false;           // Disable manual refresh button
var globalEnableKbNavigation = true;       // Enable keyboard navigation

// ===== INTERFACE SETTINGS ===== //
var globalInterfaceLanguage = 'en_US';     // Default language
var globalInterfaceCustomLanguages = [];   // Restrict languages (empty = all)
var globalHideInfoMessageAfter = 1800;     // Notification display time (ms)
var globalEditorFadeAnimation = 666;       // Editor animation speed (ms)

// ===== CALENDAR SETTINGS ===== //
var globalEventStartPastLimit = 3;         // Months of past events to load
var globalEventStartFutureLimit = 3;       // Months of future events to load
var globalTodoPastLimit = 1;               // Months of past todos to load

var globalActiveView = 'multiWeek';        // Default view (month/multiWeek/agendaWeek/agendaDay)
var globalOpenFormMode = 'double';         // 'single' or 'double' click to create events

// Business hours (8am-5pm)
var globalCalendarStartOfBusiness = 8;
var globalCalendarEndOfBusiness = 17;
var globalDefaultEventDuration = 120;      // Default event length (minutes)

// Timezone settings
var globalTimeZoneSupport = true;
var globalTimeZone = 'Europe/Berlin';      // Change to your timezone
var globalTimeZonesEnabled = [];           // Empty = all timezones enabled
var globalRewriteTimezoneComponent = true; // Use IANA timezone database
var globalRemoveUnknownTimezone = false;   // Keep non-standard timezones

// Weekend days (0=Sunday, 1=Monday, etc.)
var globalWeekendDays = [0, 6];

// Apple Reminders compatibility
var globalAppleRemindersMode = false;      // Set to 'iOS6', 'iOS7' or true if needed

// ===== CONTACTS SETTINGS ===== //
var globalCompatibility = {
    anniversaryOutputFormat: ['apple']     // Apple-style anniversary dates
};

// URI handlers
var globalUriHandlerTel = 'tel:';
var globalUriHandlerEmail = 'mailto:';
var globalUriHandlerUrl = 'http://';
var globalUriHandlerProfile = {
    'twitter': 'http://twitter.com/%u',
    'facebook': 'http://www.facebook.com/%u',
    'linkedin': 'http://www.linkedin.com/in/%u'
};

// Address settings
var globalDefaultAddressCountry = 'us';    // Default country for new addresses
var globalAddressCountryFavorites = [];    // Preferred countries list

// ===== ADVANCED SETTINGS ===== //
// (No changes needed for basic setup)
var globalSortAlphabet = ' 0123456789AÀÁÂÄÆÃÅĀBCÇĆČDĎEÈÉÊËĒĖĘĚFGĞHIÌÍÎİÏĪĮJKLŁĹĽMNŃÑŇOÒÓÔÖŐŒØÕŌPQRŔŘSŚŠȘșŞşẞTŤȚțŢţUÙÚÛÜŰŮŪVWXYÝŸZŹŻŽaàáâäæãåābcçćčdďeèéêëēėęěfgğhiìíîïīįıjklłĺľmnńñňoòóôöőœøõōpqrŕřsśšßtťuùúûüűůūvwxyýÿzźżžАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЮЯЬабвгґдеєжзиіїйклмнопрстуфхцчшщюяь';

var globalSearchTransformAlphabet = {
    '[ÀàÁáÂâÄäÆæÃãÅåĀā]': 'a', '[ÇçĆćČč]': 'c', '[Ďď]': 'd',
    '[ÈèÉéÊêËëĒēĖėĘęĚě]': 'e', '[Ğğ]': 'g', '[ÌìÍíÎîİıÏïĪīĮį]': 'i',
    '[ŁłĹĺĽľ]': 'l', '[ŃńÑñŇň]': 'n', '[ÒòÓóÔôÖöŐőŒœØøÕõŌō]': 'o',
    '[ŔŕŘř]': 'r', '[ŚśŠšȘșŞşẞß]': 's', '[ŤťȚțŢţ]': 't',
    '[ÙùÚúÛûÜüŰűŮůŪū]': 'u', '[ÝýŸÿ]': 'y', '[ŹźŻżŽž]': 'z'
};
