(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var accent3 = style.getPropertyValue('--accent3').trim();

  // --- Chart: Market Data ---
  var chartMarket = echarts.init(document.getElementById('chart-market'), null, { renderer: 'svg' });
  chartMarket.setOption({
    animation: false,
    tooltip: { trigger: 'axis', appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    grid: { left: 60, right: 30, top: 40, bottom: 50 },
    xAxis: {
      type: 'category',
      data: ['老年人口\n(亿)', '多重用药率\n(%)', '服药依从率\n(%)', 'AI工具使用率\n(76岁+%)', 'ADR年增长\n(%)'],
      axisLine: { lineStyle: { color: rule } },
      axisLabel: { color: muted, fontSize: 11, lineHeight: 16 },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'value',
      max: 100,
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { show: false }
    },
    series: [{
      type: 'bar',
      barWidth: 40,
      data: [
        { value: 21.7, itemStyle: { color: accent } },
        { value: 70.8, itemStyle: { color: accent2 } },
        { value: 38, itemStyle: { color: '#f85149' } },
        { value: 42.5, itemStyle: { color: accent3 } },
        { value: 12.6, itemStyle: { color: '#d29922' } }
      ],
      label: {
        show: true,
        position: 'top',
        color: ink,
        fontWeight: 600,
        fontSize: 13,
        formatter: function(p) { return p.value + (p.dataIndex === 0 ? '亿' : '%'); }
      },
      itemStyle: { borderRadius: [6, 6, 0, 0] }
    }]
  });
  window.addEventListener('resize', function() { chartMarket.resize(); });

  // --- Chart: Radar Comparison ---
  var chartRadar = echarts.init(document.getElementById('chart-radar'), null, { renderer: 'svg' });
  chartRadar.setOption({
    animation: false,
    tooltip: { appendToBody: true, backgroundColor: bg2, borderColor: rule, textStyle: { color: ink } },
    legend: {
      bottom: 0,
      textStyle: { color: muted, fontSize: 12 },
      itemWidth: 14, itemHeight: 8
    },
    radar: {
      indicator: [
        { name: '双人管理', max: 100 },
        { name: '低扰动', max: 100 },
        { name: '通知智能', max: 100 },
        { name: '成本优势', max: 100 },
        { name: '隐私保护', max: 100 },
        { name: '离线可用', max: 100 }
      ],
      shape: 'circle',
      splitNumber: 4,
      axisName: { color: muted, fontSize: 12 },
      splitLine: { lineStyle: { color: rule } },
      splitArea: { show: false },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'radar',
      data: [
        {
          name: '家安·双伴',
          value: [100, 95, 95, 90, 90, 95],
          areaStyle: { color: accent + '33' },
          lineStyle: { color: accent, width: 2 },
          itemStyle: { color: accent },
          symbol: 'circle',
          symbolSize: 6
        },
        {
          name: 'MEMO BOX',
          value: [10, 30, 20, 40, 30, 50],
          areaStyle: { color: accent2 + '22' },
          lineStyle: { color: accent2, width: 1.5, type: 'dashed' },
          itemStyle: { color: accent2 },
          symbol: 'circle',
          symbolSize: 5
        },
        {
          name: '小米 HiPee',
          value: [10, 30, 20, 60, 80, 20],
          areaStyle: { color: accent3 + '22' },
          lineStyle: { color: accent3, width: 1.5, type: 'dashed' },
          itemStyle: { color: accent3 },
          symbol: 'circle',
          symbolSize: 5
        },
        {
          name: 'Medisafe',
          value: [40, 60, 30, 95, 95, 10],
          areaStyle: { color: '#d29922' + '22' },
          lineStyle: { color: '#d29922', width: 1.5, type: 'dashed' },
          itemStyle: { color: '#d29922' },
          symbol: 'circle',
          symbolSize: 5
        }
      ]
    }]
  });
  window.addEventListener('resize', function() { chartRadar.resize(); });
})();