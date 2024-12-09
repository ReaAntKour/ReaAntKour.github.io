import _ from 'lodash';

class TeachingData {
    
    
    /* Return total number of tech reports. */
    total = () => this.data.length;

    /* Return the entry associated with the passed key. */
    getEntry = (key) => _.find(this.data, entry => entry.key === key);

    extractKey = entries => _.map(entries, entry => entry.key);

    /* Return the three most recent entries. */
    //getRecentKeys = () => this.getKeys().slice(0, 3);
    
    /* Return entries since 2021. */
    getRecentKeys = () => {
        const entries = this.getSortedEntries(this.data);
        return this.extractKey(_.filter(entries, entry => (entry.year === "2023")||(entry.year === "2022")||(entry.year === "2021")));
    }

    getRecentCount = () => {
        const entries = this.getSortedEntries(this.data);
        return this.extractKey(_.filter(entries, entry => (entry.year === "2021")||(entry.year === "2020"))).length;
    }

    /* Return Invited entries. */
    getInvitedKeys = () => {
        const entries = this.getSortedEntries(this.data);
        return this.extractKey(_.filter(entries, entry => (entry.type === "Invited")));
    }

    getInvitedCount = () => {
        const entries = this.getSortedEntries(this.data);
        return this.extractKey(_.filter(entries, entry => (entry.type === "Invited"))).length;
    }

    /* Return Oral entries. */
    getOralKeys = () => {
        const entries = this.getSortedEntries(this.data);
        return this.extractKey(_.filter(entries, entry => (entry.type === "Oral")||(entry.type === "Invited")));
    }

    getOralCount = () => {
        const entries = this.getSortedEntries(this.data);
        return this.extractKey(_.filter(entries, entry => (entry.type === "Oral")||(entry.type === "Invited"))).length;
    }

    /* Return Poster entries. */
    getPosterKeys = () => {
        const entries = this.getSortedEntries(this.data);
        return this.extractKey(_.filter(entries, entry => (entry.type === "Poster")));
    }

    getPosterCount = () => {
        const entries = this.getSortedEntries(this.data);
        return this.extractKey(_.filter(entries, entry => (entry.type === "Poster"))).length;
    }

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
            "key": "i2303",
            "type": "Invited",
            "title": "Applying mathematical modelling to biological problems in plant science",
            "year": "2023",
            "location": "Invited webinar by Rea L. Antoniou-Kourounioti & John A. Fozard in “Plants: a data sciences perspective” series by EMBL-EBI Training.",
            "url": "https://www.ebi.ac.uk/training/events/applying-mathematical-modelling-biological-problems-plant-science/",
            "dates": "15 March 2023",
            "keywords": [
                "Seminar"
            ],
            "sortKey": 2303,
            "selected": 1
        },
        {
            "key": "i2010",
            "type": "Invited",
            "title": "Modelling temperature-dependent epigenetic regulation",
            "year": "2020",
            "location": "Invited webinar in “Mathematics of life: Modelling molecular mechanisms” course by EMBL-EBI, Cambridge, UK",
            "dates": "28 September - 2 October 2020",
            "keywords": [
                "Seminar"
            ],
            "sortKey": 2010,
            "selected": 0
        }
    ]