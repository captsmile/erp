package com.vitalii.erp.util;

public final class  GetClassName {
    public static String getClassName() {
        try {
            throw new RuntimeException();
        } catch (Exception e) {
                return e.getStackTrace()[1].getClassName();
        }
    }
}
