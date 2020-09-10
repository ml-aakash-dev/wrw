import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

import '../../css/body/home/ourNumbers.css'
import $ from 'jquery'

class ourNumbers extends Component {
    componentDidMount = () => {

        var counterTeaserL = $('.our-numbers');
        var winHeight = $(window).height();
        if (counterTeaserL.length) {
            var firEvent = false,
                objectPosTop = $('.our-numbers').offset().top+400;
                
                //when element shows at bottom
                var elementViewInBottom = objectPosTop - winHeight;
            $(window).on('scroll', function() {
                var currentPosition = $(document).scrollTop();
                //when element position starting in viewport
              if (currentPosition > elementViewInBottom && firEvent === false) {
                firEvent = true;
                animationCounter();
              }   
            });
        }

        function animationCounter(){

            $('.counter').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });

//             const counters = document.querySelectorAll('.counter');
// const speed = 50; // The lower the slower

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = Math.ceil(count + inc);
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = Math.ceil(target);
// 		}
// 	};

// 	updateCount();
// });
        } 
    }
    render() {
        return (
            <div className="our-numbers" id="our-numbers">
                <div className="bgimg">     
                     <div className="image-wrapper">
                        <div className="content">
                            <h1>
                                Our Numbers
                            </h1>
                            <Row className="counters">
                                <Col xs={12} sm={6} className="background-l col">
                                {/* <div className="counter background-10-light" data-target="6656">0</div> */}
                                    <div className="counter background-10-light">9785</div>
                                    <h3>5 Star Google Reviews</h3>
                                </Col>
                                <Col xs={12} sm={6} className="background-d col">
                                {/* <div className="counter background-10-light" data-target="6656">0</div> */}
                                    <div className="counter background-10-light">86514</div>
                                    <h3># of Phone Sold</h3>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ourNumbers
