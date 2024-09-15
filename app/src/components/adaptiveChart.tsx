// File: src/components/AdaptiveChart.tsx

import React from 'react';
import { Platform, View, Text } from 'react-native';
import { LineChart as RNLineChart } from 'react-native-chart-kit';

let WebLineChart: any = null;
if (Platform.OS === 'web') {
  try {
    WebLineChart = require('recharts').LineChart;
  } catch (error) {
    console.warn('Failed to load recharts:', error);
  }
}

interface ChartData {
  labels: string[];
  datasets: { data: number[] }[];
}

interface AdaptiveChartProps {
  data: ChartData;
  width: number;
  height: number;
}

const AdaptiveChart: React.FC<AdaptiveChartProps> = ({ data, width, height }) => {
  if (Platform.OS === 'web' && WebLineChart) {
    // Web implementation using recharts
    const webData = data.labels.map((label, index) => ({
      name: label,
      value: data.datasets[0].data[index],
    }));

    const XAxis = require('recharts').XAxis;
    const YAxis = require('recharts').YAxis;
    const Line = require('recharts').Line;

    return (
      <WebLineChart width={width} height={height} data={webData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#6FAFE8" />
      </WebLineChart>
    );
  } else if (Platform.OS !== 'web') {
    // Native implementation using react-native-chart-kit
    return (
      <RNLineChart
        data={data}
        width={width}
        height={height}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(111, 175, 232, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    );
  } else {
    // Fallback if neither web nor native implementation is available
    return (
      <View style={{ width, height, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chart not available</Text>
      </View>
    );
  }
};

export default AdaptiveChart;