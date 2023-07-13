var htmlElement = `<li id="change-language">
<a href="/plugins/servlet/applications/versions-licenses" id="admin_menu"
    class="aui-nav-link aui-dropdown2-trigger aui-dropdown2-trigger-arrowless" aria-label="Change-language"
    aria-haspopup="true" title="Change-language" resolved="" aria-controls="change-language-content"
    aria-expanded="false">
    <span class="aui-icon aui-icon-small aui-iconfont-discover">Change-language</span>
</a>
<div id="change-language-content"
    class="aui-dropdown2 aui-style-default aui-layer aui-alignment-side-bottom aui-alignment-snap-auto" resolved=""
    tabindex="-1" style="z-index: auto; margin: 0px;" data-aui-alignment="bottom auto"
    data-aui-alignment-static="true" x-placement="bottom-end">
    <div class="aui-dropdown2-section">
        <strong>Choose language</strong>
        <ul class="aui-list-truncate">
            <li>
                <a href="#" class="aui-nav-link" id="ru_RU-language" value="ru_RU" tabindex="-1">Русский</a>
            </li>
            <li>
                <a href="#" class="aui-nav-link" id="en_US-language" value="en_US" tabindex="-1">English(US)</a>
            </li>
        </ul>
    </div>
</div>
</li>`

$(document).ready(function () {
    $(htmlElement).insertAfter($('#quicksearch-menu'))
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