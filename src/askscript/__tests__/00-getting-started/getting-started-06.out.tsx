import * as askjsx from '../../../askjsx';
askjsx;

export const expectedOutput = (
  <ask>
    <query>
      <node
        name={'fullName'}
        value={
          <call
            name={'upperCase'}
            args={[
              <call
                name={'concat'}
                args={[
                  <ref name={'firstName'} />,
                  ' ',
                  <ref name={'lastName'} />,
                ]}
              />,
            ]}
          />
        }
      />
    </query>
  </ask>
);
