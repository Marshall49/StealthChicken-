import physician_methods from './physician';
import case_methods from './case';
import comment_methods from './comment';

export default {
    ...physician_methods,
    ...case_methods,
    ...comment_methods
};