

    export interface  gestionData {
        ventasNetas: number;
        patrimonioLiquido: number;
        activoTotal: number;
        activoCorriente: number;
        pasivoCorriente: number;
        cuentasPorCobrarClientes: number;
    };
    
    export interface  liquidezData {
        activoCorriente: number;
        pasivoCorriente: number;
        disponible: number;
        inversionesTemporales: number;
        deudores: number;
    };
  
    export interface   rentabilidadData{
        utilidadBruta: number;
        ventasNetas: number;
        descuentos: number;
        utilidadOperacional: number;
        utilidadNeta: number;
        patrimonioLiquido: number;
        activoTotal: number;
    };
  
    export interface   solvenciaData {
        totalPasivo: number;
        totalActivo: number;
        pasivoCorriente: number;
        pasivoTotal: number;
        ventasNetas: number;
        patrimonio: number;
    };
