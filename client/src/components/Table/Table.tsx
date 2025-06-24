import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { useFetch } from '@/hooks/useFetch';
import type { MetricsData } from './interface/metrics';
import { createTableRows } from './constants/createTableRows';

const MetricsTable: React.FC = () => {
    const [metricsData, setMetricsData] = useState<MetricsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                setLoading(true);
                const response = await useFetch('http://localhost:3000/ml/metrics', 'GET');
                const data = await response.json();
                setMetricsData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Error al cargar las métricas');
            } finally {
                setLoading(false);
            }
        };

        fetchMetrics();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-lg">Cargando métricas...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-lg text-red-500">Error: {error}</div>
            </div>
        );
    }

    if (!metricsData) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="text-lg">No hay datos disponibles</div>
            </div>
        );
    }

    const tableRows = createTableRows(metricsData);

    return (
        <div className="w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Métricas del Modelo</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Métrica</TableHead>
                        <TableHead className="text-center">No NEO</TableHead>
                        <TableHead className="text-center">NEO</TableHead>
                        <TableHead className="text-center">Promedio Ponderado</TableHead>
                        <TableHead className="text-center">Accuracy</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tableRows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{row.metric}</TableCell>
                            <TableCell className="text-center">
                                {row.metric === 'accuracy' ? '-' : row.class_0}
                            </TableCell>
                            <TableCell className="text-center">
                                {row.metric === 'accuracy' ? '-' : row.class_1}
                            </TableCell>
                            <TableCell className="text-center">
                                {row.metric === 'accuracy' ? '-' : row.weighted_avg}
                            </TableCell>
                            <TableCell className="text-center">
                                {row.metric === 'accuracy' ? row.accuracy : '-'}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default MetricsTable;