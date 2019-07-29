import React from 'react';
import Slides from './Slides';

const Banner = () => {
    return (
        <section className="banner_w3lspvt" id="home">
            <div className="csslider infinity" id="slider1">
                <input type="radio" name="slides" checked="checked" id="slides_1" />
                <input type="radio" name="slides" id="slides_2" />
                <input type="radio" name="slides" id="slides_3" />
                <input type="radio" name="slides" id="slides_4" />
                <ul>
                    <Slides
                        banner="banner-top"
                        overlay
                        title="Neural Nets"
                        main_desc="State-of-the-Art Deep Learning Model"
                        sub_desc="Neural Networks Scans through the leaf of Plant to detect the health condition of 
                        the plant"
                    />
                    <Slides
                        banner="banner-top1"
                        overlay="overlay1"
                        title="Internet of Things (IoT)"
                        main_desc="Interconnection of Hardware with the Cloud Server"
                        sub_desc="Ut enim ad minim quis nostrud exerci sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua nostrud exerci sed."
                     />
                   </ul>
                   <div className="arrows">
				<label htmlFor="slides_1"></label>
				<label htmlFor="slides_2"></label>
				<label htmlFor="slides_3"></label>
				<label htmlFor="slides_4"></label>
			</div>
            </div>
        </section>
    );
};

export default Banner;