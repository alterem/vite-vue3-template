<template>
  <div class="container">
    <div id="chart" ref="chart"></div>
    <div class="info">
      <h3>图表说明</h3>
      <p>此图表显示了不同用户的权限数量统计，使用颜色映射来直观展示权限分布情况。</p>
      <ul>
        <li>颜色：根据权限数量进行渐变显示</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Plotly from 'plotly.js';

export default {
  name: 'UserPermissionChart',
  data() {
    return {
      plotData: {
        "data": [{
          "mode": "gauge+number",
          "title": {
            "text": "Number of Permissions"
          },
          "value": 2,
          "type": "indicator"
        }],
        "layout": {
          "template": {
            "data": {
              "histogram2dcontour": [{
                "type": "histogram2dcontour",
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]]
              }],
              "choropleth": [{
                "type": "choropleth",
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }],
              "histogram2d": [{
                "type": "histogram2d",
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]]
              }],
              "heatmap": [{
                "type": "heatmap",
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]]
              }],
              "contourcarpet": [{
                "type": "contourcarpet",
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }],
              "contour": [{
                "type": "contour",
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]]
              }],
              "surface": [{
                "type": "surface",
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                },
                "colorscale": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]]
              }],
              "mesh3d": [{
                "type": "mesh3d",
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              }],
              "scatter": [{
                "fillpattern": {
                  "fillmode": "overlay",
                  "size": 10,
                  "solidity": 0.2
                },
                "type": "scatter"
              }],
              "parcoords": [{
                "type": "parcoords",
                "line": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "scatterpolargl": [{
                "type": "scatterpolargl",
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "bar": [{
                "error_x": {
                  "color": "#2a3f5f"
                },
                "error_y": {
                  "color": "#2a3f5f"
                },
                "marker": {
                  "line": {
                    "color": "#E5ECF6",
                    "width": 0.5
                  },
                  "pattern": {
                    "fillmode": "overlay",
                    "size": 10,
                    "solidity": 0.2
                  }
                },
                "type": "bar"
              }],
              "scattergeo": [{
                "type": "scattergeo",
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "scatterpolar": [{
                "type": "scatterpolar",
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "histogram": [{
                "marker": {
                  "pattern": {
                    "fillmode": "overlay",
                    "size": 10,
                    "solidity": 0.2
                  }
                },
                "type": "histogram"
              }],
              "scattergl": [{
                "type": "scattergl",
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "scatter3d": [{
                "type": "scatter3d",
                "line": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                },
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "scattermap": [{
                "type": "scattermap",
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "scattermapbox": [{
                "type": "scattermapbox",
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "scatterternary": [{
                "type": "scatterternary",
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "scattercarpet": [{
                "type": "scattercarpet",
                "marker": {
                  "colorbar": {
                    "outlinewidth": 0,
                    "ticks": ""
                  }
                }
              }],
              "carpet": [{
                "aaxis": {
                  "endlinecolor": "#2a3f5f",
                  "gridcolor": "white",
                  "linecolor": "white",
                  "minorgridcolor": "white",
                  "startlinecolor": "#2a3f5f"
                },
                "baxis": {
                  "endlinecolor": "#2a3f5f",
                  "gridcolor": "white",
                  "linecolor": "white",
                  "minorgridcolor": "white",
                  "startlinecolor": "#2a3f5f"
                },
                "type": "carpet"
              }],
              "table": [{
                "cells": {
                  "fill": {
                    "color": "#EBF0F8"
                  },
                  "line": {
                    "color": "white"
                  }
                },
                "header": {
                  "fill": {
                    "color": "#C8D4E3"
                  },
                  "line": {
                    "color": "white"
                  }
                },
                "type": "table"
              }],
              "barpolar": [{
                "marker": {
                  "line": {
                    "color": "#E5ECF6",
                    "width": 0.5
                  },
                  "pattern": {
                    "fillmode": "overlay",
                    "size": 10,
                    "solidity": 0.2
                  }
                },
                "type": "barpolar"
              }],
              "pie": [{
                "automargin": true,
                "type": "pie"
              }]
            },
            "layout": {
              "autotypenumbers": "strict",
              "colorway": ["#636efa", "#EF553B", "#00cc96", "#ab63fa", "#FFA15A", "#19d3f3", "#FF6692", "#B6E880", "#FF97FF", "#FECB52"],
              "font": {
                "color": "#2a3f5f"
              },
              "hovermode": "closest",
              "hoverlabel": {
                "align": "left"
              },
              "paper_bgcolor": "white",
              "plot_bgcolor": "#E5ECF6",
              "polar": {
                "bgcolor": "#E5ECF6",
                "angularaxis": {
                  "gridcolor": "white",
                  "linecolor": "white",
                  "ticks": ""
                },
                "radialaxis": {
                  "gridcolor": "white",
                  "linecolor": "white",
                  "ticks": ""
                }
              },
              "ternary": {
                "bgcolor": "#E5ECF6",
                "aaxis": {
                  "gridcolor": "white",
                  "linecolor": "white",
                  "ticks": ""
                },
                "baxis": {
                  "gridcolor": "white",
                  "linecolor": "white",
                  "ticks": ""
                },
                "caxis": {
                  "gridcolor": "white",
                  "linecolor": "white",
                  "ticks": ""
                }
              },
              "coloraxis": {
                "colorbar": {
                  "outlinewidth": 0,
                  "ticks": ""
                }
              },
              "colorscale": {
                "sequential": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]],
                "sequentialminus": [[0.0, "#0d0887"], [0.1111111111111111, "#46039f"], [0.2222222222222222, "#7201a8"], [0.3333333333333333, "#9c179e"], [0.4444444444444444, "#bd3786"], [0.5555555555555556, "#d8576b"], [0.6666666666666666, "#ed7953"], [0.7777777777777778, "#fb9f3a"], [0.8888888888888888, "#fdca26"], [1.0, "#f0f921"]],
                "diverging": [[0, "#8e0152"], [0.1, "#c51b7d"], [0.2, "#de77ae"], [0.3, "#f1b6da"], [0.4, "#fde0ef"], [0.5, "#f7f7f7"], [0.6, "#e6f5d0"], [0.7, "#b8e186"], [0.8, "#7fbc41"], [0.9, "#4d9221"], [1, "#276419"]]
              },
              "xaxis": {
                "gridcolor": "white",
                "linecolor": "white",
                "ticks": "",
                "title": {
                  "standoff": 15
                },
                "zerolinecolor": "white",
                "automargin": true,
                "zerolinewidth": 2
              },
              "yaxis": {
                "gridcolor": "white",
                "linecolor": "white",
                "ticks": "",
                "title": {
                  "standoff": 15
                },
                "zerolinecolor": "white",
                "automargin": true,
                "zerolinewidth": 2
              },
              "scene": {
                "xaxis": {
                  "backgroundcolor": "#E5ECF6",
                  "gridcolor": "white",
                  "linecolor": "white",
                  "showbackground": true,
                  "ticks": "",
                  "zerolinecolor": "white",
                  "gridwidth": 2
                },
                "yaxis": {
                  "backgroundcolor": "#E5ECF6",
                  "gridcolor": "white",
                  "linecolor": "white",
                  "showbackground": true,
                  "ticks": "",
                  "zerolinecolor": "white",
                  "gridwidth": 2
                },
                "zaxis": {
                  "backgroundcolor": "#E5ECF6",
                  "gridcolor": "white",
                  "linecolor": "white",
                  "showbackground": true,
                  "ticks": "",
                  "zerolinecolor": "white",
                  "gridwidth": 2
                }
              },
              "shapedefaults": {
                "line": {
                  "color": "#2a3f5f"
                }
              },
              "annotationdefaults": {
                "arrowcolor": "#2a3f5f",
                "arrowhead": 0,
                "arrowwidth": 1
              },
              "geo": {
                "bgcolor": "white",
                "landcolor": "#E5ECF6",
                "subunitcolor": "white",
                "showland": true,
                "showlakes": true,
                "lakecolor": "white"
              },
              "title": {
                "x": 0.05
              },
              "mapbox": {
                "style": "light"
              }
            }
          },
          "font": {
            "size": 20
          },
          "title": {
            "text": "Number of Permissions"
          },
          "annotations": [{
            "showarrow": false,
            "text": "Permissions",
            "x": 0.5,
            "y": 0.9,
            "font": {
              "size": 15
            }
          }]
        }
      },
    };
  },
  mounted() {
    this.renderChart();
    window.addEventListener('resize', this.resizeChart);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeChart);
  },
  methods: {
    renderChart() {
      Plotly.newPlot(this.$refs.chart, this.plotData.data, this.plotData.layout, {
        responsive: true,
        displayModeBar: true,
        displaylogo: false,
        modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d', 'sendDataToCloud'],
        staticPlot: false,
        editable: false
      });
    },
    resizeChart() {
      Plotly.Plots.resize(this.$refs.chart);
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f5f5f5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

#chart {
  width: 100%;
  height: 500px;
}

.info {
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 5px;
  border-left: 4px solid #007bff;
}
</style>