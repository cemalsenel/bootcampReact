import React from 'react'
import { Dropdown,Menu , Image} from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://img.bilgihanem.com/wp-content/uploads/2019/03/oguz-atay-kimdir-hayati-kitaplari-en-unlu-sozleri-ve-hakkinda-az-bilinen-1024x597.jpg"/>
                <Dropdown pointing="top left" text="Oguz">
                    <Dropdown.Menu>
                        <Dropdown.Item  text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
