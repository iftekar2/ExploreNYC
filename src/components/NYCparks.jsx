import React from "react";
import ReactDOM from "react-dom";
import Park from "./NYCpark";
import '../App.css';

const NYCParks = () =>{
    return (
        <div className="parks-container">
            <Park color="black" name="Central Park" image="/images/Central_Park.jpg" location="Manhattan" url={"https://www.centralparknyc.org/"} discription="For more than 150 years, visitors have flocked to Central Park's 843 green acres in the heart of Manhattan. Since 1980, the Park has been managed by the Central Park Conservancy, in partnership with the public. Visit the official website of Central Park to learn more about Park happenings and activities and to learn how you to help Central Park!" />

            <Park color="black" name="One World Trade Center" image="/images/One_World_Trade_Center.jpg" location="Mangattan" url={"https://www.onewtc.com/"} discription="Through commemoration, exhibitions and educational programs, The National September 11 Memorial & Museum, a nonprofit in New York City, remembers and honors the 2,983 people killed in the horrific attacks of September 11, 2001, and February 26, 1993, as well as those who risked their lives to save others and all who demonstrated extraordinary compassion in the aftermath of the attacks." />

            <Park color="black" name="The Metropolitan Museum of Art" image="/images/The_MET.jpg" location="Manhattan" url={"https://www.metmuseum.org/"} discription="At New York City's most visited museum and attraction, you will experience over 5,000 years of art from around the world. The Met is for anyone as a source of inspiration, insight and understanding. You can learn, escape, play, dream, discover, connect." />

            <Park color="black" name="Empire State Building" image="/images/Empire_State_Building.jpg" location="Manhattan" url={"https://www.esbnyc.com/"} discription="The Empire State Building is the World's Most Famous Building. It rises 1,454 ft from ground to antenna & features the only 360 degree open-air vantage point of Midtown. The 86th & 102nd Fl Observatories are open daily, see esbnyc.com for hours. On a clear day you can see up to 6 states. The brand-new 2nd floor museum (included in all ticket options) offers guests 10,000 sq ft of interactive exhibits that invite visitors on a journey beginning from the building’s construction to its current place in pop culture. " />

            <Park color="black" name="Roosevelt Island" image="/images/Roosevelt_Island.jpg" location="Manhattan" url={"https://en.wikipedia.org/wiki/Roosevelt_Island"} discription="Roosevelt Island is an island in New York City's East River, within the borough of Manhattan. It lies between Manhattan Island to the west, and the borough of Queens, on Long Island, to the east." />

            <Park color="black" name="The High Line" image="/images/The_High_Line.jpg" location="Manhattan" url={"https://www.thehighline.org/"} discription="The High Line is an elevated railway transformed into a public park on Manhattan's West Side. The park features lush horticulture, artworks, seasonal food vendors, community programming, and unique views of the Hudson River and New York City skyline. The High Line runs between Gansevoort Street to West 34th Street, between 10th and 12th Avenues." />

            <Park color="black" name="Statue of Liberty" image="/images/Statue_of_Liberty.jpg" location="Manhattan" url={"https://www.nps.gov/stli/index.htm"} discription="The Statue of Liberty Enlightening the World was a gift of friendship from the people of France to the people of the United States and is a universal symbol of freedom and democracy. The Statue of Liberty was dedicated on October 28, 1886, designated as a National Monument in 1924 and restored for her centennial on July 4, 1986." />

            <Park color="black" name="Brooklyn Bridge" image="/images/Brooklyn_Bridge.jpg" location="Brooklyn" url={"https://en.wikipedia.org/wiki/Brooklyn_Bridge"} discription="Opened in 1883, the Brooklyn Bridge provides passage between Brooklyn and Manhattan for motorists, trains, bicycles and pedestrians. One of the primary symbols of New York City, it is a marvel of design and provides spectacular views of the city's skyline." />

            <Park color="black" name="Grand Central Terminal" image="/images/Grandcentral.jpg" location="Manhattan" url={"https://www.grandcentralterminal.com/"} discription="Grand Central Terminal is the most extraordinary public space in New York City. Opened to the public in 1913, this historic train terminal is a world-famous landmark in Midtown. Its rich history is a story of immense wealth and great engineering. Grand Central is one of the busiest train stations in the world, with approximately 750,000 visitors every day." />

            <Park color="black" name="Times Square" image="/images/Times_Square.jpg" location="Manhattan" url={"https://www.timessquarenyc.org/"} discription="Central area in NYC that has many shops, restaurants, office buildings and flashing billboards around it." />
        </div>
        
    )
}

export default NYCParks;