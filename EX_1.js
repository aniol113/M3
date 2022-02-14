    var m=[];
    for (i=0; i<4; i++) {
        m[i]=[];    //Es crea un arrai en cada fila.
        for (j=0; j<4; j++){
            if (j==3)
            m[i][j] = 0;
            else
            m[i][j] = generaNumRandom();
        }
    }
    return(m);
