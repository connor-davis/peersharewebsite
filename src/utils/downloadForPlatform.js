const downloadForPlatform = () => {
    let OSName = "Unknown";

    if (window.navigator.userAgent.indexOf("Windows NT 10.0")!== -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.3") !== -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") !== -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") !== -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") !== -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") !== -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") !== -1) OSName="Windows";
    if (window.navigator.userAgent.indexOf("Mac")            !== -1) OSName="Mac";
    if (window.navigator.userAgent.indexOf("Linux")          !== -1) OSName="Linux";

    let aElement = document.createElement("a");

    if (OSName === "Windows") {
        aElement.setAttribute("href", "https://github.com/connor-davis/peershare/releases/download/v0.0.6/PeerShare-Setup-0.0.6.exe");
        aElement.click();
    }

    if (OSName === "Mac") {
        aElement.setAttribute("href", "https://github.com/connor-davis/peershare/releases/download/v0.0.6/PeerShare-0.0.6.dmg");
        aElement.click();
    }
};

export default downloadForPlatform;