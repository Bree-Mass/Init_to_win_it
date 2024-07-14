# Init_to_win_it

# Breeze of Hope: A website to connect vulnerable populations to items to cope with the summer heat

### Overview

- Description of Project
- Description of Techniques
- Images

**Description of Project**

This website allows people to find charities focused on vulnerable populations. It also allows people to post items that they want to donate to help people battle summer heat.
The mission statement explains the reason behind the website. In the “Why donate?” section, users see information about three groups that are especially vulnerable to the heat: veterans, unhoused, and young people. Articles describing how these groups are most affected are found in this section and are linked so people can learn more about these issues. In the “Charities for a cause” section, users can search for charities near them based on the group they would like to address. The location and a link for more information to the charities are provided on the generated cards.
In the “Donations” section, users can contribute to helping others by donating items that can alleviate the hardship encountered during the heat. Suggestions are included in the description and the information is posted as cards so people could contact the donors to pick up the items.
Finally, the “About Us” section gives information about the software engineers who developed the website.

**Description of Techniques**

The website uses responsive design with numerous breakpoints to allow for the best user experience.

A popup form was created using the css visibility property and classList.add() method. The information imputed in the form was used to generate a card that was added to a section on the webpage.

Form validation was done using a ValidationForm class that used the validation properties of the form input type to verify input and generate error messages when needed.

Modular JS was utilized to allow for potential use of classes across different functionalities. Webpack was used to bundle the files.

An API provided by every.org was used to fetch information about charities. This API provides information based on the groups the charities work with, so it was chosen over other charity APIs for the ability to fetch specific charities based on those groups.

**Images**  
Desktop:
./images/demos/desktop-top
./images/demos/desktop-middle
./images/demos/desktop-bottom
Tablet:
./images/demos/tablet-top
./images/demos/tablet-middle
./images/demos/tablet-bottom
Mobile:
./images/mobile/desktop-top
./images/mobile/desktop-middle
./images/mobile/desktop-bottom

**References**
Xinhua. (2024, June 26). US homeless suffer disproportionate impact of heat wave. China Daily. https://global.chinadaily.com.cn/a/202406/26/WS667bc4b2a31095c51c50afb3.html

Price, K. (2024, June 25). Kids Are Particularly Vulnerable to Extreme Weather. What Are We Doing About It? Inside Climate News. https://insideclimatenews.org/news/25062024/todays-climate-extreme-weather-children/
‌
Lindsay.Capozzi. (2024, April 16). The Heat Is Turned Up: Focus on Climate Solutions for Kids. Policylab.chop.edu. https://policylab.chop.edu/blog/heat-turned-focus-climate-solutions-kids

Nicolay, M., M. Brown, L., Johns, R., & Ialynytchev, A. (2016). A study of heat related illness preparedness in homeless veterans. International Journal of Disaster Risk Reduction, 18, 72–74. https://doi.org/10.1016/j.ijdrr.2016.05.009

API: Every.org Charity API

Background image provided by Vecteezy.com
Block images provided by Unsplash.com and Pexels.com

**Github Pages URL**
https://imaniw96.github.io/Init_to_win_it/

The site can be deployed locally using "npm run dev" and will be found in localhost: 8080.

**To Improve**

Charities: Some of the charity entries also had a link to the charity website, but not all of them. I would have liked to have linked the websites if the information was available.

Donations: Have a messaging system that allows people to contact each other to coordinate the donations.

Add a filtering by location function
