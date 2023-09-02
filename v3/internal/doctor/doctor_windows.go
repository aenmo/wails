//go:build windows

package doctor

import (
	"github.com/samber/lo"
	"github.com/wailsapp/go-webview2/webviewloader"
)

func getInfo() map[string]string {
	result := make(map[string]string)
	result["Go WebView2Loader"] = lo.Ternary(webviewloader.UsingGoWebview2Loader, "true", "false")
	webviewVersion, err := webviewloader.GetAvailableCoreWebView2BrowserVersionString("")
	if err != nil {
		webviewVersion = "Error:" + err.Error()
	}
	result["WebView2 Version"] = webviewVersion

	return result
}
