import React from 'react'
import ProfileImage from '../profileimage/profileimage'
import ProfileDrawer from '../profiledrawer/profiledrawer'
import ProfileContentBox from '../profilecontentbox/profilecontentbox'

export default function ProfileBox({ profile }) {
    return (
        <div>
            Hello, {profile.firstName} {profile.lastName}!
            <ProfileImage/>
            <ProfileDrawer/>
            <ProfileContentBox/>
        </div>
    )
}