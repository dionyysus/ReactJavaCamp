import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/59100182?v=4" />
                <Dropdown pointing = "top left" text = "Gizem" >
                    <Dropdown.Menu>
                        <Dropdown.Item text = "Bilgilerim" icon = "info" />
                        <Dropdown.Item onClick = {signOut} text = "Çıkış yap" icon = "sign-out" />
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    )
}
