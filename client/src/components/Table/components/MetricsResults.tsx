import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { MetricsData } from '../interfaces/metrics';
import { createTableRows } from '../constants/createTableRows';

interface MetricsResultsProps {
    metricsData: MetricsData | null;
    error: string | null;
    isLoading: boolean;
}

export const MetricsResults = ({ metricsData, error, isLoading }: MetricsResultsProps) => {
    if (error) {
        return (
            <Card className="bg-red-900/30 border-red-700/40">
                <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <p className="text-red-200 font-medium">Error</p>
                    </div>
                    <p className="text-red-100 mt-2">{error}</p>
                </CardContent>
            </Card>
        );
    }

    if (isLoading) {
        return (
            <Card className="bg-black/20 backdrop-blur-sm border-gray-700/30">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-center p-8">
                        <div className="text-lg text-gray-300">Cargando métricas...</div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (!metricsData) {
        return null;
    }

    const tableRows = createTableRows(metricsData);

    return (
        <Card className="bg-black/20 backdrop-blur-sm border-gray-700/30">
            <CardHeader>
                <CardTitle className="text-white">Resultados del Testeo</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-bold text-gray-300">Métrica</TableHead>
                            <TableHead className="text-center text-gray-300">No NEO</TableHead>
                            <TableHead className="text-center text-gray-300">NEO</TableHead>
                            <TableHead className="text-center text-gray-300">Promedio de prueba</TableHead>
                            <TableHead className="text-center text-gray-300">Efectividad de predicción</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableRows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium text-gray-200">{row.metric}</TableCell>
                                <TableCell className="text-center text-gray-300">
                                    {row.metric === 'Efectividad de predicción' ? '' : row.class_0}
                                </TableCell>
                                <TableCell className="text-center text-gray-300">
                                    {row.metric === 'Efectividad de predicción' ? '' : row.class_1}
                                </TableCell>
                                <TableCell className="text-center text-gray-300">
                                    {row.metric === 'Efectividad de predicción' ? '' : row.weighted_avg}
                                </TableCell>
                                <TableCell className="text-center text-gray-300">
                                    {row.metric === 'Efectividad de predicción' ? row.accuracy : ''}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};
