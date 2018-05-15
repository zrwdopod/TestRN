import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBy:'desc'
        };
    }

    _changeOrderBy(){
        (this.state.orderBy == 'desc')?this.setState({orderBy:'asc'}):this.setState({orderBy:'desc'});
    }

    render() {
        return (
            <View>
                <Text onPress={this._changeOrderBy.bind(this)}>{this.state.orderBy}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
});
