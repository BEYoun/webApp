import React from 'react'
import Link from '../../atoms/Header/Link'

interface MenuProps {

}

export const Menu: React.FC<MenuProps> = ({ }) => {
    return (
        <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
                <Link active={true} text="Dashboad" type="normal" />
                <Link active={false} text="Team" type="normal" />
                <Link active={false} text="Contact Us" type="normal" />
                <Link active={false} text="Calendar" type="normal" />
            </div>
        </div>
    );
}
export const MenuMobile: React.FC<MenuProps> = ({ }) => {
    return (
        <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <Link active={true} text="Dashboad" type="mobile" />
                <Link active={false} text="Team" type="mobile" />
                <Link active={false} text="Contact Us" type="mobile" />
                <Link active={false} text="Calendar" type="mobile" />
            </div>
        </div>
    );
}
