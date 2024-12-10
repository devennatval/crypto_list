export const formatRupiah = (value: number) => {
    const valueWithSeparator = Intl.NumberFormat('id-ID').format(value);
    return "Rp " + valueWithSeparator;
}
