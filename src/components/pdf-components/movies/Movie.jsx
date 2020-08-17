import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
import moment from "moment";

const POSTER_PATH = "https://image.tmdb.org/t/p/w154";

const styles = StyleSheet.create({
    page: {
        padding: 10,
        backgroundColor: "#f2ab02",
    },
    section: {
        margin: 10,
        padding: 10,
        background: "#f2a002",
        flexGrow: 1
    },
    movieContainer: {
        border: "20 solid #02a502 ",
        padding: 20,
        backgroundColor: "#fafbfc",
        display: "flex",
        flexDirection: "row",
    },
    movieDetails: {
        display: "flex",
        marginLeft: 40
    },
    movieTitle: {
        alignItems: "center",
        fontSize: 5,
        // marginBottom: 10
    },
    movieOverview: {
        fontSize: 15,

    },

    image: {
        height: 200,
        width: 150
    },
    subtitle: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: 150,
        alignItems: "center",
        marginBottom: 12
    },
    vote: {
        display: "flex",
        flexDirection: "row",
        fontSize: 15,
        color: "#71253a",
    },
    rating: {
        height: 10,
        width: 10
    },
    vote_text: {
        fontSize: 10
    },
    vote_pop: {
        fontSize: 15,
        padding: 2,
        backgroundColor: "#61C700",
        color: "#fff"
    },
    vote_pop_text: {
        fontSize: 15,
        marginLeft: 4
    },
    overviewContainer: {
        minHeight: 110
    },
    detailsFooter: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        fontSize: 20,
    },
    lang: {
        fontSize: 8,
        fontWeight: 700
    },
    vote_average: {
        fontSize: 8,
        marginLeft: 4,
        fontWeight: "bold"
    }
});

const PdfDocument = (props) => {
    console.log("pdf props", props.data);
    return (
        <Document>
            <Page style={styles.page}>
                {props.data
                    ? props.data.map((a, index) => {
                        return (
                            <View key={index} style={styles.movieContainer}>
                                <Image
                                    style={styles.image}
                                    source={
                                        a.poster_path !== null
                                            ? `${POSTER_PATH}${a.poster_path}`
                                            : "150.jpg"
                                    }
                                />
                                <View style={styles.movieDetails}>
                                    <Text style={styles.movieTitle}>{a.title}</Text>
                                    <View style={styles.subtitle}>
                                        <View style={styles.vote}>
                                            <Image source="star.png" style={styles.rating} />
                                            <Text style={styles.vote_text}>{a.vote_count}</Text>
                                        </View>
                                        <View style={styles.vote}>
                                            <Text style={styles.vote_pop}>{a.popularity}</Text>
                                            <Text style={styles.vote_pop_text}>Popularity</Text>
                                        </View>
                                    </View>
                                    <View style={styles.overviewContainer}>
                                        <Text style={styles.movieOverview}>{a.overview}</Text>
                                    </View>
                                    <View style={styles.detailsFooter}>
                                        <Text style={styles.lang}>
                                            Language: {a.original_language.toUpperCase()}
                                        </Text>
                                        <Text style={styles.vote_average}>
                                            Average Votes: {a.vote_average}
                                        </Text>
                                        <Text style={styles.vote_average}>
                                            Release Date:{" "}
                                            {moment(a.release_date, "YYYY-MM-DD").format(
                                                " MMMM D Y"
                                            )}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })
                    : ""}
            </Page>
        </Document>
    );
}
export default PdfDocument
