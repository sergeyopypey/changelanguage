var htmlElement = `<li id="change-language">
<a href="/plugins/servlet/applications/versions-licenses" id="change-language_menu"
    class="aui-nav-link aui-dropdown2-trigger aui-dropdown2-trigger-arrowless" aria-label="Change-language"
    aria-haspopup="true" title="Change-language" resolved="" aria-controls="change-language-content"
    aria-expanded="false">
    <span class="aui-icon aui-icon-small aui-iconfont-world">Change-language</span>
</a>
<div id="change-language-content"
    class="aui-dropdown2 aui-style-default aui-layer aui-alignment-side-bottom aui-alignment-snap-auto" resolved=""
    tabindex="-1" style="z-index: auto; margin: 0px;" data-aui-alignment="bottom auto"
    data-aui-alignment-static="true" x-placement="bottom-end">
    <div class="aui-dropdown2-section">
        <strong>Choose language</strong>
        <ul class="aui-list-truncate">
        </ul>
    </div>
</div>
</li>`

var options = {
    "en_US": "English (United States)",
    "zh_CN": "中文 (中国)",
    "cs_CZ": "čeština (Česká republika)",
    "da_DK": "Dansk (Danmark)",
    "nl_NL": "Nederlands (Nederland)",
    "en_UK": "English (UK)",
    "et_EE": "Eesti (Eesti)",
    "fi_FI": "suomi (Suomi)",
    "fr_FR": "français (France)",
    "de_DE": "Deutsch (Deutschland)",
    "hu_HU": "magyar (Magyarország)",
    "is_IS": "íslenska (Ísland)",
    "it_IT": "italiano (Italia)",
    "ja_JP": "日本語 (日本)",
    "ko_KR": "한국어 (대한민국)",
    "no_NO": "norsk (Norge)",
    "pl_PL": "polski (Polska)",
    "pt_BR": "português (Brasil)",
    "ro_RO": "română (România)",
    "ru_RU": "русский (Россия)",
    "sk_SK": "Slovenčina (Slovenská republika)",
    "es_ES": "español (España)",
    "sv_SE": "svenska (Sverige)"
};

$(document).ready(function () {
    $(htmlElement).insertAfter($('#quicksearch-menu'))
    $.each(options, function (value, text) {
        var liElement = `<li><a href="#" class="aui-nav-link" id="${value}-language" value="${value}" tabindex="-1">${text}</a></li>`
        $('#change-language-content ul.aui-list-truncate').append(liElement);

    });
    $('#change-language-content a.aui-nav-link').click(function () {
        var lang = $(this).attr('value')
        var t = document.getElementById("atlassian-token");
        var alt_token = t && t.getAttribute ? t.getAttribute("content") : void 0
        var baseUrl = $('meta[name=ajs-base-url]').attr('content')
        var user = $('meta[name=ajs-remote-user]').attr('content')
        $.ajax({
            url: `${baseUrl}/secure/UpdateUserPreferences.jspa?inline=true&decorator=dialog&username=${user}&userIssuesPerPage=50&userNotificationsMimeType=html&userLocale=${lang}&timeZoneRegion=JIRA&defaultUserTimeZone=JIRA&notifyOwnChanges=false&shareDefault=true&keyboardShortcutsEnabled=true&autoWatchPreference=INHERIT&externalLinksNewWindow=true&atl_token=${alt_token}`,
            type: 'POST',
            success: function (response) {
                // Обработка успешного ответа от сервера
                console.log(response);
            },
            error: function (xhr, status, error) {
                // Обработка ошибки запроса
                console.log('Произошла ошибка:', error);
            }
        });
        location.reload()
    });
});