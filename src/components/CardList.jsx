import React from 'react';
import cardData from '../constants/cardData';
import Arrow from "../assets/svg/Arrow";
import Heading from './Heading';
import Section from './Section';

const CardList = () => {
  return (
    <Section id="Games">
      <Heading
        className="md:max-w-md lg:max-w-2xl"
        title="Have Fun with Games"
      />
      <div className="flex flex-wrap gap-6 mb-10 justify-center">
        {cardData.map((item) => (
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full xs:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
            style={{
              backgroundImage: `url(${item.backgroundUrl})`,
            }}
            key={item.id}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <img
                height={500}
                width={500}
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-auto mb-4"
                style={{ pointerEvents: 'auto' }}
              />
              <h6 className="mb-2">{item.title}</h6>
              <p className="body-2 mb-6 text-n-3">{item.description}</p>
              <div className="flex items-center mt-auto justify-end">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                  style={{ pointerEvents: 'auto' }}
                >
                  Play Now
                  <Arrow className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CardList;
