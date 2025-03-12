import Logo from './Logo';
import SearchBar from './SearchBar';
import ButtonIcon from './ButtonIcon';
import Avatar from './Avatar';
import NavItem from './NavItem';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex w-full flex-col border-b border-gray-700 bg-gray-900 text-xs sm:text-sm">
            {/* Górny rząd - Logo, wyszukiwarka i ikony użytkownika */}
            <div className="py-1.5 sm:py-2.5">
                <nav className="mx-auto flex w-full max-w-[85rem] items-center justify-between px-2 sm:px-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Logo />
                    </div>

                    {/* Środek - Wyszukiwarka */}
                    <div className="mx-2 hidden w-full max-w-xs sm:mx-4 sm:block sm:max-w-sm">
                        <SearchBar />
                    </div>

                    {/* Prawa strona - Ikony i Avatar */}
                    <div className="flex items-center gap-x-1 sm:gap-x-2">
                        <ButtonIcon
                            src="/icons/question-icon.svg"
                            alt="Help"
                            className="h-5 w-5 text-white sm:h-6 sm:w-6"
                        />

                        <ButtonIcon
                            src="/icons/notification-icon.svg"
                            alt="Notifications"
                            badge={2}
                            className="h-5 w-5 sm:h-6 sm:w-6"
                        />

                        <Avatar
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                            alt="Zdjęcie profilowe użytkownika"
                            className="ml-1 sm:ml-2"
                            size={24}
                        />
                    </div>
                </nav>
            </div>

            {/* Dolny rząd - Ikony nawigacyjne z opisami */}
            <div className="border-t border-gray-800 bg-gray-900 py-0.5 sm:py-1">
                <div className="mx-auto w-full max-w-[85rem] px-2 sm:px-4">
                    <div className="flex items-center justify-between">
                        {/* Lewa strona - główne ikony nawigacyjne */}
                        <div className="flex items-center gap-x-0.5 sm:gap-x-1 md:gap-x-2">
                            <NavItem
                                src="/icons/home-icon.svg"
                                alt="Dashboard"
                                label="Dashboard"
                                isActive={true}
                                className="xs:text-xs px-1.5 py-1 text-[10px] sm:px-3 sm:py-1.5 md:text-sm"
                            />

                            <NavItem
                                src="/icons/alert-icon.svg"
                                alt="Alerts"
                                label="Alerts"
                                className="xs:text-xs px-1.5 py-1 text-[10px] sm:px-3 sm:py-1.5 md:text-sm"
                            />

                            <NavItem
                                src="/icons/integration-icon.svg"
                                alt="Integrations"
                                label="Integrations"
                                className="xs:text-xs px-1.5 py-1 text-[10px] sm:px-3 sm:py-1.5 md:text-sm"
                            />

                            <NavItem
                                src="/icons/search-icon.svg"
                                alt="Search"
                                label="Search"
                                badge={
                                    <span className="xs:text-xs rounded-sm bg-purple-600 px-1 py-0.5 text-[8px] font-medium text-white">
                                        New
                                    </span>
                                }
                                className="xs:text-xs px-1.5 py-1 text-[10px] sm:px-3 sm:py-1.5 md:text-sm"
                            />

                            <NavItem
                                src="/icons/document-icon.svg"
                                alt="Empty Contents"
                                label="Empty Contents"
                                className="xs:text-xs hidden px-1.5 py-1 text-[10px] sm:flex sm:px-3 sm:py-1.5 md:text-sm"
                            />
                        </div>

                        {/* Prawa strona - dodatkowe ikony */}
                        <div className="flex items-center gap-x-0.5 sm:gap-x-2">
                            <NavItem
                                src="/icons/pro-icon.svg"
                                alt="PRO"
                                label="PRO"
                                iconClassName="bg-indigo-700 text-white"
                                className="xs:text-xs px-1.5 py-1 text-[10px] text-gray-400 hover:bg-gray-800 hover:text-white sm:px-3 sm:py-1.5 md:text-sm"
                            />

                            <NavItem
                                src="/icons/examples-icon.svg"
                                alt="Examples"
                                label="Examples"
                                iconClassName="bg-indigo-700 text-white"
                                className="xs:text-xs px-1.5 py-1 text-[10px] text-gray-400 hover:bg-gray-800 hover:text-white sm:px-3 sm:py-1.5 md:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Pasek wyszukiwania dla małych ekranów */}
            <div className="border-t border-gray-800 bg-gray-900 py-1 sm:hidden sm:py-2">
                <div className="mx-auto w-full max-w-[85rem] px-2 sm:px-4">
                    <SearchBar placeholder="Szukaj..." />
                </div>
            </div>
        </header>
    );
}
