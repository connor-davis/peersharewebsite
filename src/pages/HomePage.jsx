import Icon from "../assets/icon.png";
import ScreenShot from "../assets/screenshot.png";
import downloadForPlatform from "../utils/downloadForPlatform";

const HomePage = () => {
    return (

        <div class={"flex flex-col w-full h-full"}>
            <div
                class={"flex justify-between items-center p-3 w-full h-auto border-b border-gray-300 dark:border-black"}>
                <div class={"flex items-center space-x-2"}>
                    <div class={"w-10 h-10"}>
                        <img src={Icon}/>
                    </div>
                    <div class={"text-2xl text-green-700 dark:text-green-500 font-bold"}>PeerShare</div>
                </div>
                <div class={"flex items-center space-x-2"}>
                    <a
                        class={"text-white dark:text-black hover:text-green-700 dark:hover:text-green-500 px-4 py-2 text-center text-lg rounded-lg cursor-pointer"}
                        href={"https://github.com/connor-davis/peershare"}
                        target={"_blank"}>Github
                    </a>
                    <div
                        class={"text-white dark:text-black bg-green-700 dark:bg-green-500 px-4 py-2 text-center text-lg rounded-lg cursor-pointer"}
                        onClick={() => downloadForPlatform()}>Download
                    </div>
                </div>
            </div>
            <div
                class={"flex flex-col p-3 w-full h-full border-t border-white dark:border-gray-800 border-b border-b-gray-300 dark:border-b-black px-5 md:px-20 lg:px-48 overflow-y-auto"}>
                <div class={"flex flex-col md:flex-row md:items-center md:space-x-10 space-y-5 w-full h-auto"}>
                    <div class={"flex flex-col w-full md:w-2/5 h-auto py-10 md:py-20 space-y-10"}>
                        <div class={"text-4xl font-bold"}>
                            <span class={"text-green-700 dark:text-green-500"}>Peer-To-Peer</span> File Sharing
                            Made <span class={"text-green-700 dark:text-green-500"}>Easy</span>
                        </div>
                        <div class={"text-gray-600 dark:text-gray-400"}>With PeerShare you can easily
                            share files with the people closest to you for free! This is thanks to peer-to-peer
                            technology used in the app that allows you to send files over an encrypted noise connection.
                        </div>
                        <div class={"p-3"}>
                            <div
                                class={"text-white dark:text-black bg-green-700 dark:bg-green-500 p-3 text-center text-lg rounded-lg cursor-pointer"}
                                onClick={() => downloadForPlatform()}>Download
                            </div>
                        </div>
                    </div>
                    <div class={"w-full md:w-3/5 shadow-lg rounded-md"}>
                        <img src={ScreenShot} class={"w-full rounded-md"}/>
                    </div>
                </div>
            </div>
            <div
                class={"flex justify-center items-center p-3 w-full h-auto border-t border-white dark:border-gray-800"}>
                2022 @ LoneWolf Software
            </div>
        </div>
    );
};

export default HomePage;