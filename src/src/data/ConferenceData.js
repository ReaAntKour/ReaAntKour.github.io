import _ from 'lodash';

class ConferenceData {
    
    
    /* Return total number of tech reports. */
    total = () => this.data.length;

    /* Return the entry associated with the passed key. */
    getEntry = (key) => _.find(this.data, entry => entry.key === key);

    extractKey = entries => _.map(entries, entry => entry.key);

    /* Return the three most recent entries. */
    getRecentKeys = () => this.getKeys().slice(0, 3);
  
    /* Return a list of selected entry keys. */
    getSelectedKeys = () => {
        const entries = this.getSortedEntries(this.data);
        return this.extractKey(_.filter(entries, entry => entry.selected === 1));
    }

    /* Return a list of all entry keys sorted by date and with the associated type. If no type provided, return all entry keys. */
    getKeys = (type) => {
        const entries = this.getSortedEntries(this.data);
        if (type === undefined) {
            return this.extractKey(entries);
        }
        return this.extractKey(_.filter(entries, entry => entry.type === type));
    }
    
    buildTypeMap() {
        const typeMap = {};
        const mapKey = (key) => {
          const entry = this.getEntry(key);
          const type = entry['type'];
          if (typeMap[type]) {
            typeMap[type].push(key);
          } else {
            typeMap[type] = [key];
          }
        };
        _.each(this.getKeys(), key => mapKey(key));
        return typeMap;
    }

    buildKeyWordMap() {
        const keywordMap = {};
        const mapKey = (key) => {
          const entry = this.getEntry(key);
          const keywords = entry['keywords'];
          // eslint-disable-next-line no-unused-expressions
          _.each(keywords, keyword => {
            // eslint-disable-next-line no-unused-expressions
            keyword && ((keywordMap[keyword]) ? keywordMap[keyword].push(key) : keywordMap[keyword] = [key]);
          });
        };
        _.each(this.getKeys(), key => mapKey(key));
        return keywordMap;
    }
    
    buildYearMap() {
        const yearMap = {};
        const mapKey = (key) => {
          const entry = this.getEntry(key);
          const year = entry['year'];
          if (yearMap[year]) {
            yearMap[year].push(key);
          } else {
            yearMap[year] = [key];
          }
        };
        _.each(this.getKeys(), key => mapKey(key));
        return yearMap;
    }

    // Return the passed list of entries in reverse chronological order.
    getSortedEntries = (entries) => entries.sort((a, b) => b.sortKey - a.sortKey);

    /* Return the number of papers associated with the passed Author name. */
    getTypeCount = (type) => (this.buildTypeMap()[type] ? this.buildTypeMap()[type].length : 0);

    /* Return the number of papers associated with the passed keyword. */
    getKeywordCount = (topic) => (this.buildKeyWordMap()[topic] ? this.buildKeyWordMap()[topic].length : 0);

    /* Return the number of papers published in the given year. */
    getYearCount = (year) => (this.buildYearMap()[year] ? this.buildYearMap()[year].length : 0);

    getTypes = () => _.keys(this.buildTypeMap()).sort();

    /* Return a sorted list of all keywords. */
    getKeywords = () => _.keys(this.buildKeyWordMap()).sort();
  
    /* Return a sorted list of all years. */
    getYears = () => _.keys(this.buildYearMap()).sort().reverse();

    /* Return a list of the Bibtex keys associated with the passed author. */
    getKeysByType = (type) => this.buildTypeMap()[type];

    /* Return a list of the Bibtex keys associated with the passed keyword. */
    getKeysByKeyword = (topic) => this.buildKeyWordMap()[topic];

    /* Return a list of the Bibtex keys associated with the passed year. */
    getKeysByYear = (year) => this.buildYearMap()[year];

    data = [
        {
            "key": "u2106",
            "type": "Upcoming",
            "title": "Seasonal time keeping in plants: Remembering winter to time flowering",
            "year": "2021",
            "location": "Invited speaker at 85th Cold Spring Harbor Laboratory Symposium on Quantitative Biology: Biological Time Keeping",
            "dates": "1-5 June 2021",
            "keywords": [
                "Conference"
            ],
            "sortKey": 2106,
            "selected": 1
        },
        {
            "key": "u2105",
            "type": "Upcoming",
            "title": "How plants use their growth rate to measure long-term temperature",
            "year": "2021",
            "location": "Invited seminar in Plantastic monthly seminar series at the Centre for Plant Sciences, University of Leeds",
            "dates": "18 May 2021",
            "keywords": [
                "Seminar"
            ],
            "sortKey": 2105,
            "selected": 0
        },
        {
            "key": "u2104",
            "type": "Invited",
            "title": "Breaking winter into “Bits”: how plants sense the cold",
            "year": "2021",
            "location": "Invited seminar at the Linnean Centre Plant Science Frontiers Seminars",
            "dates": "22 April 2021",
            "keywords": [
                "Seminar"
            ],
            "sortKey": 2104,
            "selected": 1
        },
        {
            "key": "i2010",
            "type": "Invited",
            "title": "Modelling temperature-dependent epigenetic regulation",
            "year": "2020",
            "location": "Invited seminar in “Mathematics of life: Modelling molecular mechanisms” course by EMBL-EBI",
            "dates": "28 September - 2 October 2020",
            "keywords": [
                "Conference"
            ],
            "sortKey": 2010,
            "selected": 1
        },
        {
            "key": "i2005",
            "type": "Invited",
            "title": "Modelling how plants sense and remember winter",
            "year": "2020",
            "location": "Invited seminar in the “Maths in the Life Sciences” seminar series at the University of Manchester",
            "dates": "18 May 2020",
            "notes": "Rescheduled as Zoom seminar",
            "keywords": [
                "Seminar"
            ],
            "sortKey": 2005,
            "selected": 0
        },
        {
            "key": "o2010",
            "type": "Oral",
            "title": "How do plants measure temperature?",
            "year": "2020",
            "location": "Oral presentation at the Accessible talks of the Research and Support Staff Voice - Annual Science Meeting. Norwich Research Park",
            "dates": "13 October 2020",
            "keywords": [
                "Conference"
            ],
            "sortKey": 2010,
            "selected": 0
        },
        {
            "key": "o1912",
            "type": "Oral",
            "title": "How plants use their growth rate to measure long-term temperature",
            "year": "2019",
            "location": "Oral presentation at Quantitative Methods is Gene Regulation V. London, United Kingdom",
            "dates": "9-10 December 2019",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1912,
            "selected": 0
        },
        {
            "key": "o1911",
            "type": "Oral",
            "title": "How do plants recognise winter cold?",
            "year": "2019",
            "location": "Oral Presentation at Early Career Researchers’ Conference 2019 (Alliance between JIC, MPIPZ and CRAG). Costa Brava (Catalonia)",
            "dates": "11-14 November 2019",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1911,
            "selected": 0
        },
        {
            "key": "o1909",
            "type": "Oral",
            "title": "Unpicking long-term epigenetic memory using a slow vernalizing natural variant of Arabidopsis",
            "year": "2019",
            "location": "Oral Presentation at EpiGeneSys – the Journey Continues to London. London, United Kingdom",
            "dates": "22-24 September 2019",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1909,
            "selected": 0
        },
        {
            "key": "o1804",
            "type": "Oral",
            "title": "Natural variation identifies specific steps in Polycomb silencing",
            "year": "2018",
            "location": "Oral Presentation at Biophysics of Epigenetic and Chromatin Dynamics. JCMB, University of Edinburgh",
            "dates": "16-17 April 2018",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1804,
            "selected": 0
        },
        {
            "key": "o1707",
            "type": "Oral",
            "title": "Mathematical modelling of temperature-sensitive epigenetic switches",
            "year": "2017",
            "location": "Oral Presentation at Epigenetics meets mathematics. Berlin, Germany",
            "dates": "2-8 July 2017",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1707,
            "selected": 0
        },
        {
            "key": "o1712",
            "type": "Oral",
            "title": "Absence of warmth: the epigenetic signature of winter",
            "year": "2017",
            "location": "Oral Presentation at Quantitative Methods in Gene Regulation IV. Corpus Christi College, Cambridge",
            "dates": "18-19 December 2017",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1712,
            "selected": 0
        },
        {
            "key": "o1607",
            "type": "Oral",
            "title": "Temperature-sensitive epigenetic switches in a real winter",
            "year": "2016",
            "location": "Oral Presentation at The Third Annual Cambridge Epigenetics Symposium. The Sainsbury Laboratory, Cambridge",
            "dates": "1 July 2016",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1607,
            "selected": 0
        },
        {
            "key": "o1610",
            "type": "Oral",
            "title": "Breaking down winter into “bits”: real world epigenetics",
            "year": "2016",
            "location": "Oral Presentation at the Annual Science Meeting - Norwich Research Park",
            "dates": "14 October 2016",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1610,
            "selected": 0
        },
        {
            "key": "o1506",
            "type": "Oral",
            "title": "Mechanistic dissection of chromatin switches during winter cold",
            "year": "2015",
            "location": "Oral Presentation at European Workshop on Plant Chromatin. Uppsala, Sweden",
            "dates": "25-26 June 2015",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1506,
            "selected": 0
        },
        {
            "key": "o1106",
            "type": "Oral",
            "title": "Artificial Photosynthesis of Hybrid Systems",
            "year": "2011",
            "location": "Oral Presentation at the 11th International Conference on Carbon Dioxide Utilisation (ICCDU XI). Dijon, France",
            "dates": "27-30 June 2011",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1106,
            "selected": 0
        },
        {
            "key": "o1007",
            "type": "Oral",
            "title": "Artificial Photosynthesis of Hybrid Systems",
            "year": "2010",
            "location": "Oral presentation (invited) at the University of Nottingham's Cross disciplinary Research Showcase",
            "dates": "29 July 2010",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1007,
            "selected": 0
        },
        {
            "key": "po1910",
            "type": "Poster",
            "title": "Epigenetic memory of environmental signals - Mathematical modelling at long spatiotemporal scales",
            "year": "2019",
            "location": "Poster at 4D Epigenome. Venice, Italy",
            "dates": "3-5 October 2019",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1910,
            "selected": 0
        },
        {
            "key": "po1908",
            "type": "Poster",
            "title": "Multiple temperature inputs are combined in vernalization",
            "year": "2019",
            "location": "E-Poster at the American Society of Plant Biologists’ (ASPB) Plant Biology 2019. San Jose, United States",
            "dates": "3-7 August 2019",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1908,
            "selected": 0
        },
        {
            "key": "po1811",
            "type": "Poster",
            "title": "Genetics, Epigenetics and Temperature Sensing in a Natural Environment",
            "year": "2018",
            "location": "Poster at the Genetics society’s Genotype to Phenotype to Fitness. Exeter, United Kingdom",
            "dates": "22-23 November 2018",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1811,
            "selected": 0
        },
        {
            "key": "po1309",
            "type": "Poster",
            "title": "Investigating the LHCII-Assisted TiO2 Photoreduction of CO2",
            "year": "2013",
            "location": "Poster at the Royal Society of Chemistry's (RSC) Challenges in Chemical Renewable Energy (ISACS12). Cambridge, United Kingdom",
            "dates": "3-6 September 2013",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1309,
            "selected": 0
        },
        {
            "key": "po1109",
            "type": "Poster",
            "title": "Carbon dioxide photoreduction using a hybrid catalyst",
            "year": "2011",
            "location": "Poster at the RSC's Faraday Discussion 155: Artificial Photosynthesis. Edinburgh, United Kingdom",
            "dates": "5-7 September 2011",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1109,
            "selected": 0
        },
        {
            "key": "po1105",
            "type": "Poster",
            "title": "Modelling Artificial Photosynthesis with Titania photocatalyst",
            "year": "2011",
            "location": "Poster at the Women in Applied Mathematics workshop in Heraklion, Crete",
            "dates": "2-5 May 2011",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1105,
            "selected": 0
        },
        {
            "key": "po1104",
            "type": "Poster",
            "title": "Modelling Artificial Photosynthesis with Titania photocatalyst",
            "year": "2011",
            "location": "Poster at the British Applied Mathematics Colloquium (BAMC) at the University of Birmingham",
            "dates": "11-13 April 2011",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1104,
            "selected": 0
        },
        {
            "key": "pa1801",
            "type": "Participation",
            "year": "2018",
            "location": "Attended the EpiGene2Sys meeting in Munich",
            "dates": "15-17 January 2018",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1801,
            "selected": 0
        },
        {
            "key": "pa1201",
            "type": "Participation",
            "year": "2012",
            "location": "Participated in the 5th Mathematics in the Plant Sciences Study Group, held at the University of Nottingham in 2012, which resulted in a publication",
            "dates": "3-6 January 2012",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1201,
            "selected": 0
        },
        {
            "key": "pa1103",
            "type": "Participation",
            "year": "2011",
            "location": "Participated in the NIMBioS Tutorial: Stochastic Models with Biological Applications, held at NIMBioS at the University of Tennessee, Knoxville, United States",
            "dates": "16-18 March 2011",
            "keywords": [
                "Conference"
            ],
            "sortKey": 1103,
            "selected": 0
        }
    ]
    
}

export default ConferenceData;
