package com.marketplace

enum class TipoCliente {
    ESTANDAR,
    SOCIO,
    BENEFICIARIO_FUNDACION
}
// 1. La clase general (Padre)
abstract class Mascota(
    val codigoFicha: String,
    val nombre: String,
    val tipoCliente: TipoCliente
) {
    // Cada hija decidirá cómo se calcula esto
    abstract fun calcularMontoBase(minutos: Long): Double
}

// 2. Las clases específicas (Hijas)
class Perro(codigoFicha: String, nombre: String, tipoCliente: TipoCliente)
    : Mascota(codigoFicha, nombre, tipoCliente) {

    override fun calcularMontoBase(minutos: Long): Double {
        var tarifa = (minutos / 60.0) * 2000.0
        if (tipoCliente == TipoCliente.SOCIO) tarifa *= 0.85
        return tarifa
    }
}

class Gato(codigoFicha: String, nombre: String, tipoCliente: TipoCliente)
    : Mascota(codigoFicha, nombre, tipoCliente) {

    override fun calcularMontoBase(minutos: Long): Double {
        if (minutos < 30) return 0.0
        return (minutos / 60.0) * 1200.0
    }
}

class Exotico(codigoFicha: String, nombre: String, tipoCliente: TipoCliente, val requiereTemp: Boolean)
    : Mascota(codigoFicha, nombre, tipoCliente) {

    override fun calcularMontoBase(minutos: Long): Double {
        var tarifa = (minutos / 60.0) * 3500.0
        if (requiereTemp) tarifa *= 1.25
        return tarifa
    }
}

