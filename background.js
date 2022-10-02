chrome.contextMenus.create({
    "title": "カウント!",
    "type": "normal",
    "id": "counter",
    "contexts": ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "counter") {
        var selectedText = info.selectionText;
        selectedText = selectedText.replace(/(\r\n|\n|\r)/gm, '');
        selectedText = selectedText.replace(/\s+/g, '');
        window.confirm(selectedText.length + "文字");
    }
});