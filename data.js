var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.14348585191296337,
        "pitch": 0.009495392016022564,
        "fov": 1.3338926890073282
      },
      "linkHotspots": [
        {
          "yaw": -0.4171266116227148,
          "pitch": 0.17077043028538874,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6533345020238741,
        "pitch": 0.02257382123641527,
        "fov": 1.3338926890073282
      },
      "linkHotspots": [
        {
          "yaw": 2.576264266147887,
          "pitch": 0.1259589543905708,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": -1.6935675028827646,
          "pitch": 0.023259915619469496,
          "rotation": 7.853981633974483,
          "target": "4-gf-bedroom-1"
        },
        {
          "yaw": 1.2364330862333048,
          "pitch": -0.05741717354054465,
          "rotation": 0,
          "target": "6-upper-living"
        },
        {
          "yaw": -2.6787443295075963,
          "pitch": 0.04142072563535493,
          "rotation": 0,
          "target": "5-gf-bedroom-2"
        },
        {
          "yaw": 0.33065358983829896,
          "pitch": 0.04152677680701089,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.1965260014856831,
        "pitch": 0.043793609048631055,
        "fov": 1.3338926890073282
      },
      "linkHotspots": [
        {
          "yaw": -0.8398260452446298,
          "pitch": 0.07967742949404588,
          "rotation": 0,
          "target": "3-work-area"
        },
        {
          "yaw": -1.048223095218006,
          "pitch": 0.14236013048237162,
          "rotation": 4.71238898038469,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-work-area",
      "name": "Work Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3338926890073282
      },
      "linkHotspots": [
        {
          "yaw": 2.0459059496688194,
          "pitch": 0.10392552284143619,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-gf-bedroom-1",
      "name": "GF Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.090342694339581,
        "pitch": 0.0056420493045017395,
        "fov": 1.3338926890073282
      },
      "linkHotspots": [
        {
          "yaw": 1.105196844991557,
          "pitch": 0.023462707098371283,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-gf-bedroom-2",
      "name": "GF Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.6176885289291558,
        "pitch": -0.020119044157000943,
        "fov": 1.3338926890073282
      },
      "linkHotspots": [
        {
          "yaw": 0.5672761954015257,
          "pitch": 0.07605330025201695,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upper-living",
      "name": "Upper Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.17318320507292917,
        "pitch": 0.0333584172057062,
        "fov": 1.3338926890073282
      },
      "linkHotspots": [
        {
          "yaw": -0.2227306438752219,
          "pitch": 0.15090528160025585,
          "rotation": 10.210176124166829,
          "target": "1-dining"
        },
        {
          "yaw": 2.4162114456425776,
          "pitch": 0.051486986589258876,
          "rotation": 0,
          "target": "7-ff-bedroom-1"
        },
        {
          "yaw": -0.9662623311115066,
          "pitch": 0.1119077966880031,
          "rotation": 0,
          "target": "8-ff-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-ff-bedroom-1",
      "name": "FF Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07541545992739884,
        "pitch": 0,
        "fov": 1.3338926890073282
      },
      "linkHotspots": [
        {
          "yaw": -0.37527336886929064,
          "pitch": -0.0005288751856387108,
          "rotation": 0,
          "target": "6-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ff-bedroom-2",
      "name": "FF Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.791370128724946,
        "pitch": 0.013015337410820393,
        "fov": 1.3338926890073282
      },
      "linkHotspots": [
        {
          "yaw": 0.2852831170361725,
          "pitch": -0.060565199082718735,
          "rotation": 0,
          "target": "6-upper-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Renovation at N. Paravur",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
