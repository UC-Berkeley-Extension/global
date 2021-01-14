/* global writeDebug,angular,app,pageTitle,encodeFilter */
if (window.angular && angular.version) {
  app.factory('filterVariablesFactory', ['$location', ($location) => {
    const fvf = {};
    
    fvf.defaultTab = 'online-programs';
    fvf.onlineOnly = true;
    fvf.specified = {
      featured: $location.search().featured,
      category: $location.search().category || '',
      international: $location.search().international || '',
      location: $location.search().location || '',
      online: $location.search().online || '',
      format: $location.search().format || '',
      academicArea: $location.search().academicArea || '',
      programStream: $location.search().programStream ? {
        name: $location.search().programStream,
        filter: true,
      } : '',
    };

    fvf.filterVariables = {
      tab: $location.search().tab || fvf.defaultTab, // removed Boolean($location.search().tab)
      availability: !$location.search().availability,
      featured: {
        programs: {
          show: $location.search().tab !== 'study-abroad-programs',
          filter: fvf.specified.featured,
        },
      },
      tags: {
        partTime: [],
        fullTime: [],
        online: [],
        professional: [],
        academic: [],
        highSchool: [],
      },
      category: {
        fullTime: {
          filter: fvf.specified.category.includes('fullTime'),
          count: 0,
        },
        partTime: {
          filter: fvf.specified.category.includes('partTime'),
          count: 0,
        },
        academic: {
          filter: fvf.specified.category.includes('academic'),
          count: 0,
        },
        all: !fvf.specified.category ? true : (this.fullTime && this.partTime),
      },
      international: {
        professional: {
          filter: fvf.specified.international.includes('professional'),
          count: 0,
        },
        academic: {
          filter: fvf.specified.international.includes('academic'),
          count: 0,
        },
        highSchool: {
          filter: fvf.specified.international.includes('highSchool'),
          count: 0,
        },
        all: !fvf.specified.international ? true
          : (this.professional && this.academic && this.highSchool),
      },
      online: {
        filter: false,
        count: 0,
      },
      'FLAG: COVID online': {
        filter: fvf.onlineOnly
          || fvf.specified.online === ''
          || fvf.specified.online,
        count: 0,
      },
      locations: {
        online: fvf.specified.location.includes('online'),
        berkeley: fvf.specified.location.includes('berkeley'),
        sf: fvf.specified.location.includes('sf'),
        belmont: fvf.specified.location.includes('belmont'),
        other: fvf.specified.location.includes('other'),
        all: !fvf.specified.location ? true
          : (this.other && this.online && this.berkeley && this.sf && this.belmont),
      },
      formats: {
        liveOnline: {
          filter: fvf.specified.format.includes('liveOnline'),
          count: 0,
        },
        onlineFixedDate: {
          filter: fvf.specified.format.includes('onlineFixedDate'),
          count: 0,
        },
        onlineStartAnytime: {
          filter: fvf.specified.format.includes('onlineStartAnytime'),
          count: 0,
        },
        classroom: {
          filter: fvf.specified.format.includes('classroom'),
          count: 0,
        },
        all: !fvf.specified.format ? true
          : (this.liveOnline.filter && this.onlineFixedDate.filter
            && this.onlineStartAnytime.filter && this.classroom.filter),
      },
      academicAreas: {
        art: {
          name: 'Art and Design',
          filter: fvf.specified.academicArea.includes('art'),
          count: {
            programs: 0,
          },
        },

        behavioral: {
          name: 'Behavioral Health Sciences',
          filter: fvf.specified.academicArea.includes('behavioral'),
          count: {
            programs: 0,
          },
        },

        business: {
          name: 'Business',
          filter: fvf.specified.academicArea.includes('business'),
          count: {
            programs: 0,
          },
        },

        construction: {
          name: 'Construction and Sustainability',
          filter: fvf.specified.academicArea.includes('construction'),
          count: {
            programs: 0,
          },
        },

        education: {
          name: 'Education',
          filter: fvf.specified.academicArea.includes('education'),
          count: {
            programs: 0,
          },
        },

        humanities: {
          name: 'Humanities and Languages',
          filter: fvf.specified.academicArea.includes('humanities'),
          count: {
            programs: 0,
          },
        },

        sciences: {
          name: 'Sciences, Mathematics and Biotechnology',
          filter: fvf.specified.academicArea.includes('sciences'),
          count: {
            programs: 0,
          },
        },

        technology: {
          name: 'Technology and Information Management',
          filter: fvf.specified.academicArea.includes('technology'),
          count: {
            programs: 0,
          },
        },

        writing: {
          name: 'Writing, Editing and Technical Communication',
          filter: fvf.specified.academicArea.includes('writing'),
          count: {
            programs: 0,
          },
        },

        all: !fvf.specified.academicArea,
      },
      programStreams: {
        [fvf.specified.programStream.name || '']: fvf.specified.programStream,
        all: !fvf.specified.programStream,
      },
    };

    return fvf;
  }]);
}
