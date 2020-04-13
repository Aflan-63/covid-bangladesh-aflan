import React, { Component } from 'react'
import Dhaka from '../divisions/Dhaka'
import Rajshahi from '../divisions/Rajshahi'
import Mymensingh from '../divisions/Mymensingh'
import Sylhet from '../divisions/Sylhet'
import Khulna from '../divisions/Khulna'
import Barishal from '../divisions/Barishal'
import Chittagong from '../divisions/Chittagong'
import DivisionalBorder from '../border/DivisionalBorder'
import NationalBorder from '../border/NationalBorder'
import Rongpur from '../divisions/Rongpur'

export default class BangladeshMap extends Component {
    render() {
        return (
            <div>
                <DivisionalBorder></DivisionalBorder>
                <NationalBorder></NationalBorder>
                <NationalBorder></NationalBorder>
                <Rongpur></Rongpur>
                <Rajshahi></Rajshahi>
                <Mymensingh></Mymensingh>
                <Dhaka></Dhaka>
                <Sylhet></Sylhet>
                <Khulna></Khulna>
                <Barishal></Barishal>
                <Chittagong></Chittagong>

            </div>
        )
    }
}
