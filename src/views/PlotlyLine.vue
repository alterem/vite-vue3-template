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
          "hovertemplate": "Username=%{x}<br>Permission Count=%{marker.color}<extra></extra>",
          "legendgroup": "",
          "marker": {
            "color": [1, 2],
            "coloraxis": "coloraxis",
            "pattern": {
              "shape": ""
            }
          },
          "name": "",
          "orientation": "v",
          "showlegend": false,
          "textposition": "auto",
          "x": ["abel", "admin"],
          "xaxis": "x",
          "y": [1, 2],
          "yaxis": "y",
          "type": "bar"
        }],
        "layout": {
          "template": {
            "data": {
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
              "title": {
                "x": 0.05
              }
            }
          },
          "xaxis": {
            "anchor": "y",
            "domain": [0.0, 1.0],
            "title": {
              "text": "用户名"
            },
            "categoryorder": "total ascending"
          },
          "yaxis": {
            "anchor": "x",
            "domain": [0.0, 1.0],
            "title": {
              "text": "权限数量"
            }
          },
          "coloraxis": {
            "colorbar": {
              "title": {
                "text": "权限数量"
              }
            },
            "colorscale": [
              [0.0, "#440154"],
              [0.1111111111111111, "#482878"],
              [0.2222222222222222, "#3e4989"],
              [0.3333333333333333, "#31688e"],
              [0.4444444444444444, "#26828e"],
              [0.5555555555555556, "#1f9e89"],
              [0.6666666666666666, "#35b779"],
              [0.7777777777777778, "#6ece58"],
              [0.8888888888888888, "#b5de2b"],
              [1.0, "#fde725"]
            ]
          },
          "legend": {
            "tracegroupgap": 0
          },
          "title": {
            "text": "每个用户的权限数量统计"
          },
          "barmode": "relative"
        }
      }
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