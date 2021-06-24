import _ from 'lodash';

class WorkExperienceData {
    
    /* Return the entry associated with the passed key. */
    getEntry = (key) => _.find(this.data, entry => entry.key === key);

    extractKey = entries => _.map(entries, entry => entry.key);

    getKeys = () => {
        return this.extractKey(this.data.sort((a, b) => b.sortKey - a.sortKey));
    }

    data = [
        {
            "key": "phd",
            "type": "phd",
            "year": "2009-2014",
            "title": "PhD Research on Artificial Photosynthesis",
            "courseTitle": "PhD in Biosciences",
            "location": "University of Nottingham, UK",
            "area":"Interdisciplinary research combining Biology, Mathematics and Chemical Engineering",
            "thesisTitle": "LHCII-assisted TiO2 photocatalysis of CO2 to small organic compounds.",
            "supervisors": [
                "[Prof. E. Murchie (Biosciences)](https://www.nottingham.ac.uk/biosciences/people/erik.murchie)", 
                "[Prof. O. Jensen (Applied Mathematics)](https://www.research.manchester.ac.uk/portal/oliver.jensen.html)", 
                "[Prof. A. Ruban (Biophysics, Queen Mary University, London)](https://www.qmul.ac.uk/sbcs/staff/alexanderruban.html)", 
                "[Prof. J. Wattis (Applied Mathematics)](https://www.nottingham.ac.uk/mathematics/people/jonathan.wattis)", 
                "[Prof. M. Maroto-Valer (Chemical Engineering)](https://rccs.hw.ac.uk/academic-staff/87-prof-mercedes-maroto-valer.html)"
            ],
            "collaborators": [
                "[Professor Jeffrey Chi-Sheng Wu (National Taiwan University)](http://www.che.ntu.edu.tw/che/?p=395&lang=en)",
                "Chien-Wei Lee (National Taiwan University)"
            ],
            "result": "Awarded 20th January 2014",
            "vivaDate":"Viva: 17th December 2013",
            "abstract": "I developed a novel photocatalyst by combining the light harvesting complex (LHCII) of plants with a known UV-light photocatalyst, TiO₂, to convert CO₂ to fuel using visible light. Mathematical models of the chemical reactions identified targets for optimisation.",
            "keywords": [
            "Journal-Article"
            ],
            "image": "images/thesis_model.png",
            "LHCIIimageLink": "https://www.sciencedirect.com/science/article/pii/S000527280900098X",
            "logo": "images/UoN.jpg",
            "link": "https://www.nottingham.ac.uk/",
            "collaboratorLogo1": "images/qmul.png",
            "collaboratorLink1": "https://www.qmul.ac.uk/sbcs/staff/alexanderruban.html",
            "collaboratorLogo2": "images/national-taiwan-university.png",
            "collaboratorLink2": "http://www.che.ntu.edu.tw/che/?p=395&lang=en",
            "sortKey": 2014
        },
        {
            "key": "project2",
            "type": "postdoc",
            "title": "Postdoc Research on Quantitative Gene Regulation",
            "grantTitle": "Dissecting quantitative, analogue, antisense-mediated transcriptional control (BBSRC funding)",
            "year": "Current Position (2018-present)",
            "location": "John Innes Centre, UK",
            "area":"Interdisciplinary research combining mathematical modelling and experimental plant biology",
            "abstract": "Plants need to quantitatively regulate gene expression to set up their vernalization requirement. I am developing a stochastic spatial model of protein expression in growing roots, that will be compared against microscopy data, collected by collaborators at SLU, Uppsala. Additionally, I am involved in coordinating the project and co-supervising a PhD student from an experimental background.",
            "supervisors": "In the groups of [Prof Martin Howard](https://www.jic.ac.uk/people/martin-howard/) and [Prof Dame Caroline Dean](https://www.jic.ac.uk/people/caroline-dean/)",
            "contributors": [
                "Anis Meschichi (SLU Uppsala)",
                "Svenja Reeck",
                "Matthew Hartley",
                "Stefanie Rosa (SLU Uppsala)",
                "Caroline Dean",
                "Martin Howard"
            ],
            "keywords": [
            "Journal-Article"
            ],
            "image": "images/root.png",
            "logo": "images/jic.jpg",
            "link": "https://www.jic.ac.uk/",
            "collaboratorLogo1": "images/slu.png",
            "collaboratorLink1": "https://stefanierosa.wixsite.com/rosalab",
            "funderLogo": "images/BBSRC.png",
            "sortKey": 2021
        },
        {
            "key": "project1",
            "type": "postdoc",
            "title": "Postdoc Research on Arabidopsis Cold Sensing",
            "grantTitle": "Measurement of temperature exposure and integration over time (ERC funding)",
            "year": "2014-2018",
            "location": "John Innes Centre, UK",
            "area":"Interdisciplinary research combining mathematical modelling with lab and field experiments",
            "abstract": "Recognising winter reliably is vital for plants to correctly time developmental transitions. The temperature sensing mechanism of this process is still poorly understood, with the prevailing idea being that one or a few specialised “thermosensors” collect the temperature information. I worked on an interdisciplinary project and developed a mathematical model that helped elucidate this mechanism, showing that multiple, distinct temperature inputs are necessary and implicated growth as a thermosensor. Together with collaborators (JIC, Lund and Sundsvall), I designed and carried out experiments that showed that plants sense the “absence of warmth” as the signature of winter. Our mathematical model had predictive power and I used it to predict the plant’s response in a climate warming scenario.",
            "supervisors": "In the groups of [Prof Martin Howard](https://www.jic.ac.uk/people/martin-howard/) and [Prof Dame Caroline Dean](https://www.jic.ac.uk/people/caroline-dean/)",
            "contributors": [
                "Jo Hepworth",
                "Yusheng Zhao",
                "Julia I Qüesta",
                "Rebecca H Bloomer",
                "Amélie Heckmann",
                "Torbjörn Säll (Lund University)",
                "Svante Holm (Mid Sweden University)",
                "Caroline Dean",
                "Martin Howard"
            ],
            "keywords": [
            "Journal-Article"
            ],
            "image": "images/arabid_field.jpg",
            "videoImage": "images/video_image.jpg",
            "videoLink": "https://www.youtube.com/watch?v=UB1Tr2A8jlc",
            "logo": "images/jic.jpg",
            "link": "https://www.jic.ac.uk/",
            "collaboratorLogo1": "images/midSwedenUni.png",
            "collaboratorLogo2": "images/lund.png",
            "funderLogo": "images/ERC.png",
            "sortKey": 2018
        }
    ]
    
}

export default WorkExperienceData;
