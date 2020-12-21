import React from 'react';
import { pagedPermalink } from '../components/features/system/utils';
import DefaultLayout from '../components/layout/Default';
import Head from '../components/layout/Head';
import Pager from '../components/ui/Pager';
import VerticalSpace from '../components/ui/VerticalSpace';
import UserList from '../components/features/users/ui/UserList';

/**
 * custom data for this template (Like front matter)
 */

export const data = {
    pageTitle: 'Users',
    description: 'A list of users',
    pagination: {
        data: 'users',
        size: 6,
    },
    permalink: (data) => pagedPermalink(data.pagination, 'users'),
};

/**
 * users come from _data/users.js data file in _data
 * users are fetched from a simulated API to test aysnc data in templates
 */

export default function Users({ site, pageTitle, description, pagination }) {
    const { title } = site;
    return (
        <DefaultLayout
            head={
                <Head
                    title={pageTitle}
                    slogan={title}
                    description={description}
                />
            }
            title={pageTitle}
            active="/users/"
        >
            <UserList users={pagination.items} />
            <VerticalSpace size={4} />
            <Pager pagination={pagination} />
        </DefaultLayout>
    );
}
