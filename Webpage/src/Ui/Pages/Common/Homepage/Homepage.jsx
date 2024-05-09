import React from 'react'
import Slider1 from '../../../Component/Sliders/Slider1/Slider1'
import Slider2 from '../../../Component/Sliders/Slider2/Slider2'
import Slider3 from '../../../Component/Sliders/Slider3/Slider3'
import Slider4 from '../../../Component/Sliders/Slider4/Slider4'
import Slider5 from '../../../Component/Sliders/Slider5/Slider5'
import Slider6 from '../../../Component/Sliders/Slider6/Slider6'
import Section1 from '../../../Component/Sections/Section1'
import Section2 from '../../../Component/Sections/Section2'
import Section3 from '../../../Component/Sections/Section3'
import Section4 from '../../../Component/Sections/Section4'
import Section5 from '../../../Component/Sections/Section5'
import Section6 from '../../../Component/Sections/Section6'

export default function Homepage() {
    return (
        <div>
            <Slider1 />
            <Section1 />
            <Slider2 />
            <Slider3 />
            <Section2 />
            <Slider4 />
            <Slider6 />
            <Slider5 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </div>
    )
}
